import { Component, ElementRef } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-getStarted',
  styleUrls: ['./getStarted.style.css'],
  templateUrl: './getStarted.template.html'
})
export class getStartedComponent {

  constructor(private highlightJsService: HighlightJsService) {
  }

  highlightByService(target: ElementRef) {
    this.highlightJsService.highlight(target);
  }


  demoArduino = `
         <pre>
            <code class="arduino highlight">
#include &ltWebUSB.h&gt

const WebUSBURL URLS[] = {
  { 1, "webusb.github.io/arduino/demos/" },
  { 0, "localhost:8000" },
};

const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };

WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);

#define Serial WebUSBSerial

const int ledPin = 13;

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("Sketch begins.\r\n> ");
  Serial.flush();
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (Serial && Serial.available()) {
    int byte = Serial.read();
    Serial.write(byte);
    if (byte == 'H') {
      Serial.write("\r\nTurning LED on.");
      digitalWrite(ledPin, HIGH);
    } else if (byte == 'L') {
      Serial.write("\r\nTurning LED off.");
      digitalWrite(ledPin, LOW);
    }
    Serial.write("\r\n> ");
    Serial.flush();
  }
}
            </code>
        </pre>`;
}



