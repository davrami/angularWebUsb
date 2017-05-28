import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { slideInOutAnimation } from '../../../assets/animations/fade-in.animation';


@Component({
  selector: 'app-LCD',
  styleUrls: ['./LCD.style.css'],
  templateUrl: './LCD.template.html',
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class LCDComponent implements AfterViewInit {
  /**
   * constructor de LCDComponent
   * @param elementRef 
   */
  constructor(private elementRef: ElementRef) { }
  /**
  * incluimos de forma dinámica los script que vamos a utilizar
  */
  ngAfterViewInit() {
    var o = document.createElement("script");
    o.type = "text/javascript";
    o.src = "../../../assets/js/serial/serial.js";
    this.elementRef.nativeElement.appendChild(o);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/js/LCD/led.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  //codigo arduino
  sampleContent1 = `
         <pre >
            <code class="arduino highlight">
  /**
  *Sketch que recibe un texto y lo muestra
  *por un pantalla LCD.S
  */
  #include &ltWebUSB.h&gt

  const WebUSBURL URLS[] = {
    { 1, "webusb.github.io/arduino/demos/" },
    { 0, "localhost:8000" },
  };

  const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };

  WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);

  #define Serial WebUSBSerial

  /**
   Instancia de los pins que vamos a utilitzar.
  */
  const int ledPin = 13;

  void setup() {
    while (!Serial) {
      ;
    }
    Serial.begin(9600);
    Serial.write("Sketch begins.\r\n> ");
    Serial.flush();
    /**
       assignamos los pins como salida.
    */
    pinMode(ledPin, OUTPUT);
    lcd.begin(16, 2);
  }

  void loop() {
    //variable que guarda los datos que enviamos desde el navegador
    int byte = "";

    /**
     * El loop estara constantemente pendiente que recibe datos.
     * Cuando recibe un dato lo muestra por la pantalla.
     */
    if (Serial && Serial.available()) {
      //limpia la pantall
      lcd.clear();
      //mueve el cursos a la posición 1,1
      lcd.setCursor(1, 1);
      while (Serial.available() > 0) {
        byte = Serial.read();
        lcd.write(byte);
      }
      //cuando recibe H enciende el led 13
      if (byte == 'H') {
        Serial.write("\r\nTurning LED on.");
        digitalWrite(ledPin, HIGH);
      } else if (byte == 'L') {
        //cuando recibe L apaga el LED 13
        Serial.write("\r\nTurning LED off.");
        digitalWrite(ledPin, LOW);
      } else {

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
   * evento que se ejecuta al pulsar el boton  #led
   * envia (HIGH/LOW) para cambiar el estado del pin 13.
   */
  $(document).on("click", "#led", function () {
      if (led == "H") {
          led = "L"
          $(this).textContent = 'Led Off';
      } else {
          led = "H"
          $(this).textContent = 'Led On';

      }
      if (port !== undefined) {
          port.send(textEncoder.encode(led)).catch(error => {
              console.log('Send error: ' + error);
          });
      }
  });
            </code>
        </pre>

        <pre>
          <code class="typescript highlight">
  /**
   * Evento que se ejecuta cuando se pulsa el botón #send.
   * Envia el texto del input y se lo envia al dispositivo.
   */
  $(document).on("click", "#send", function () {
      var text = document.getElementById('text').value;
      console.log(text);
      $(".lcd").html(text);

      if (port !== undefined) {
          port.send(textEncoder.encode(text)).catch(error => {
              console.log('Send error: ' + error);
          });
      }
  });
          </code>
        </pre>

        
        `;

}
