import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
//import '../../../assets/js/rainbow/rainbow.js';
//import { port, textEncoder } from '../../../assets/js/rainbow/rainbow.js';

@Component({
    selector: 'app-pong',
    styleUrls: ['./pong.style.css'],
    templateUrl: './pong.template.html'
})
export class PongComponent implements AfterViewInit {

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.src = "../../../assets/js/rainbow/serial.js";
        this.elementRef.nativeElement.appendChild(o);

        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "../../../assets/js/pong/pong.js";
        this.elementRef.nativeElement.appendChild(s);

        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "../../../assets/js/pong/usb.js";
        this.elementRef.nativeElement.appendChild(a);
    }

    sampleContent1 = `
         <pre >
            <code class="arduino highlight">
    #include &ltWebUSB.h&gt

    #include &ltLiquidCrystal.h&gt

    LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

    #define Serial WebUSBSerial

    int melody[] = {
    262, 196, 196, 220, 196, 0, 247, 262
    };

    // note durations: 4 = quarter note, 8 = eighth note, etc.:
    int noteDurations[] = {
    4, 8, 8, 4, 4, 4, 4, 4
    };

    const WebUSBURL URLS[] = {
    { 1, "webusb.github.io/arduino/demos/" },
    { 0, "localhost:8000" },
    };

    const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };

    WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);


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
    
    if (Serial && Serial.available()) {
        
        lcd.setCursor(4, 1);

        value1 = analogRead(p1); // realizar la lectura analógica raw
        position1 = map(value1, 0, 1023, 0, 100);  // convertir a porcentaje

        value2 = analogRead(p2); // realizar la lectura analógica raw
        position2 = map(value2, 0, 1023, 0, 100);  // convertir a porcentaje

        int byte = Serial.read();
        
        if (byte == 'H') {
        Serial.write(position1);
        Serial.write('-');
        Serial.write(position2);
        } else if(byte!='H'){
        lcd.clear();
        while (Serial.available() > 0) {
            byte = Serial.read();
            lcd.write(byte);
        }
        }else if(byte =='L'){
        lcd.write(byte);
        for (int thisNote = 0; thisNote < 8; thisNote++) {
            int noteDuration = 1000 / noteDurations[thisNote];
            tone(3, melody[thisNote], noteDuration);
            int pauseBetweenNotes = noteDuration * 1.30;
            delay(pauseBetweenNotes);
            noTone(3);
        }
        }
        
        Serial.flush();
    }
    
    }
            </code>
        </pre>
        
        `;

    sampleContent2 = `
         <pre>
            <code class="typescript highlight">
  public pins: Array<any>;

  constructor() {
    this.pins = [
      ['pin12', 1, 2, false],
      ['pin11', 3, 4, false],
      ['pin10', 5, 6, false],
      ['pin9', 7, 8, false]
    ];
  }

  toggle(pin) {
    console.log(pin);

    this.pins.forEach(function (v, i) {
      if (v[0].includes(pin)) {
        v[3] = !v[3];
        (v[3]) ? 
          port.send(textEncoder.encode(v[1])) : 
          port.send(textEncoder.encode(v[2]));
      }
    });
  }
            </code>
        </pre>
        
        `;

}
