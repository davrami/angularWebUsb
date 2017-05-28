import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { slideInOutAnimation } from '../../../assets/animations/fade-in.animation';


@Component({
    selector: 'app-pong',
    styleUrls: ['./pong.style.css'],
    templateUrl: './pong.template.html',
    animations: [slideInOutAnimation],
    host: { '[@slideInOutAnimation]': '' }
})
export class PongComponent implements AfterViewInit {
    
    /**
     * constructor de la clase PongComponent
     */
    constructor(private elementRef: ElementRef) {}

    /**
     * incluimos de forma dinámica los script que vamos a utilizar
     */
    ngAfterViewInit() {
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.src = "../../../assets/js/serial/serial.js";
        this.elementRef.nativeElement.appendChild(o);

        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "../../../assets/js/pong/usb.js";
        this.elementRef.nativeElement.appendChild(a);
    }
    /**
     * incluye el arxivo pong.js
     */
    startGame() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "../../../assets/js/pong/pong.js";
        this.elementRef.nativeElement.appendChild(s);
    }


    //codigo arduino
    sampleContent1 = `
         <pre >
            <code class="arduino highlight">
    /**
     * Sketch que permite jugar al pong.
     */
    #include &ltWebUSB.h&gt

    #include &ltLiquidCrystal.h&gt

    LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

    #define Serial WebUSBSerial

    const WebUSBURL URLS[] = {
    { 1, "webusb.github.io/arduino/demos/" },
    { 0, "localhost:8000" },
    };

    const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };

    WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);

    /**
     * Instancia de los pins que vamos a utilitzar.
     */
    const int p1 = A0;
    const int p2 = A1;

    int value1;      //variable que almacena la lectura analógica raw
    int position1;   //posicion del potenciometro en tanto por ciento

    int value2;      //variable que almacena la lectura analógica raw
    int position2;   //posicion del potenciometro en tanto por ciento


    void setup() {
    while (!Serial) {
        ;
    }
    Serial.begin(9600);
    Serial.write("Sketch begins.\r\n> ");
    Serial.flush();
    lcd.begin(16, 2);
    }
    
    void loop() {
    /**
     * El loop estará constantemente pendiente que recibe datos.
     * Cuando recibe un byte se irá a la parte del codigo que corresponde.
     */
    if (Serial && Serial.available()) {
        lcd.setCursor(4, 1);

        value1 = analogRead(p1); // realizar la lectura analógica raw
        position1 = map(value1, 0, 1023, 0, 100);  // convertir a porcentaje

        value2 = analogRead(p2); // realizar la lectura analógica raw
        position2 = map(value2, 0, 1023, 0, 100);  // convertir a porcentaje

        int byte = Serial.read();
        
        if (byte == 'H') {
            // si recibe H envia las posiciones de los potenciometros
            Serial.write(position1);
            Serial.write('-');
            Serial.write(position2);
        } else if(byte!='H'){
            // si recibe otro dato(la puntuación) lo muestra por pantalla
            lcd.clear();
            while (Serial.available() > 0) {
                byte = Serial.read();
                lcd.write(byte);
            }
        }
        
         Serial.flush();
        }
    
    }
            </code>
        </pre>
        
        `;

    //codigo script
    sampleContent2 = `
         <pre>
            <code class="typescript highlight">
    /**
     * Método que se ejecuta cuando el navegador recibe datos 
     * del dispositivo. Separa los datos que recibimos con un split
     * y lo asigna a pPlayer1 y pPlayer2
     */
    port.onReceive = data => {
        let textDecoder = new TextDecoder();
        value = textDecoder.decode(data) + "";
        posiciones = value.split("-");
        pPlayer1 = posiciones[0].charCodeAt();
        pPlayer2 = posiciones[1].charCodeAt();

        if (p1 != undefined || p2 != undefined) {
            p1.y = (270 * pPlayer1) / 100;
            p2.y = (270 * pPlayer2) / 100;
        }
    }
            </code>
        </pre>

        <pre>
            <code class="typescript highlight">
   // Initialize our game instance
    var game = new Game();

    function MainLoop() {
        game.update();
        game.draw();
        // Call the main loop again at a frame rate of 30fps
        setTimeout(MainLoop, 33.3333);
    }

    MainLoop();

    /**
     * hacemos un intervalo cada 50 milisegundos para pregutar sobre la
     * posición de los potenciometros 
     */
    setInterval(function () { port.send(textEncoder.encode("H")); }, 50);
            </code>
        </pre>
        
        `;

}
