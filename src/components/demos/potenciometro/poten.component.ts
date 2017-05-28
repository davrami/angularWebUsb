import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { slideInOutAnimation } from '../../../assets/animations/fade-in.animation';


@Component({
    selector: 'app-poten',
    templateUrl: './poten.template.html',
    styleUrls: ['./poten.style.css'],
    animations: [slideInOutAnimation],
    host: { '[@slideInOutAnimation]': '' }
})
export class PotenComponent implements AfterViewInit {
    /**
     * constructor de la clase PotenComponent
     */
    constructor(private elementRef: ElementRef) { };

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
        s.src = "../../../assets/js/potenciometro/potenciometro.js";
        this.elementRef.nativeElement.appendChild(s);
    }

    //codigo arduino
    sampleContent1 = `
         <pre >
            <code class="arduino highlight">
 /**
  * Sketch que hace una lectura de un potenciometro y lo envia
  * al navegadr
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
     * Instancia de los pins analogicos que vamos a utilitzar.
     */
    const int analogPin = A0;
    int value;      //variable que almacena la lectura analógica raw
    int position;   //posicion del potenciometro en tanto por ciento
    float voltage;  //voltage que recibe el potenciometro
    void setup() {
    while (!Serial) {
        ;
    }
    Serial.begin(9600);
    Serial.write("Sketch begins.\r\n> ");
    Serial.flush();
    }
    
    void loop() {
        /**
         * El loop estara constantemente pendiente que recibe datos.
         */
        if (Serial && Serial.available()) {

            value = analogRead(analogPin); // realizar la lectura analógica raw
            position = map(value, 0, 1023, 0, 100);  // convertir a porcentaje

            voltage = value*(5.0/1023.0); //conversión en voltage
        
            int byte = Serial.read();
            
            if (byte == 'P') {
            //cuando recibe una P envia la posición del potenciometro
            Serial.write("Por");//envia Por+(valor)
            Serial.write(position);
            }else if(byte == 'V'){
            //cuando recibe una V envia los voltages qu recibe el potenciómetro
            Serial.write("Vol");//enviar Vol+(valor)
            Serial.write(voltage);
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
     * metodo que se ejecuta cuando el navegador recibe datos 
     * del dispositio.
     */
    port.onReceive = data => {
        let textDecoder = new TextDecoder();
        value = textDecoder.decode(data) + "";

        if (value.indexOf("Por")) {
            /**
             * cuando recibe datos con la palabra Por
             * los procesa y lo muestra en el navegador
             */
            valueTradcVol = value.substr(3, value.length - 1);
            $("#valVolt").html(valueTradcVol.charCodeAt());
        } else if (value.indexOf("Vol")) {
            /**
             * cuando recibe datos con la palabra Vol
             * los procesa y lo muestra en el navegador
             */
            valueTradcPor = value.substr(3, value.length - 1);
            $("#valPor").html(valueTradcPor.charCodeAt());
        }
    }
            </code>
        </pre>

        <pre>
            <code class="typescript highlight">
    /**
     * Evento que se ejecuta cuando se pulsa el botón #send.
     * Ejecuta un setInterval pidiendo la posición y el voltage.
     * Ademas inserta dos graficos para representar estos valores.
     */
    $(document).on("click", "#send", function () {
        setInterval(function () { port.send(textEncoder.encode("P")); }, 500);
        porChart();


        setInterval(function () { port.send(textEncoder.encode("V")); }, 500);
        Voltchart();
    });

            </code>
        </pre>
        
        `;

}