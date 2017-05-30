/**
 * Sketch que pasado un byte, asociado a una función
 * enciende o apaga un LED.
 */
#include <WebUSB.h>

const WebUSBURL URLS[] = {
  { 1, "webusb.github.io/arduino/demos/" },
  { 0, "localhost:8000" },
};

const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };

WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);

#define Serial WebUSBSerial

/**
 * Instancia de los pins que vamos a utilitzar.
 */
const int ledPin12 = 12;
const int ledPin11 = 11;
const int ledPin10 = 10;
const int ledPin9 = 9;
int ledPins[] = {
  12, 11, 10, 9
};
int pinCount = 4;
int val = 0;

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("Sketch begins.\r\n> ");
  Serial.flush();
  /**
   * assignamos a los pins como salida.
   */
  pinMode(ledPin12, OUTPUT);
  pinMode(ledPin11, OUTPUT);
  pinMode(ledPin10, OUTPUT);
  pinMode(ledPin9, OUTPUT);
}

void loop() {
  /**
   * El loop estará constantemente pendiente que recibe datos.
   * Cuando recibe un byte se irá a la parte del codigo que corresponde.
   */
  if (Serial && Serial.available()) {

    int byte = Serial.read();

    if (byte == '1') {
      digitalWrite(ledPin12, HIGH); //enciende el LED
      val = digitalRead(ledPin12);  //guarda su valor
      /**
       * envia al navegador su numero de digital y su valor
       * 12 y 1 o 0
       */
      Serial.write("12"); 
      Serial.write(val);
    } else if (byte == '2') {
      digitalWrite(ledPin12, LOW); //apaga el LED
      val = digitalRead(ledPin12);
      Serial.write("12");
      Serial.write(val);
    } else if (byte == '3') {
      digitalWrite(ledPin11, HIGH);
      val = digitalRead(ledPin11);
      Serial.write("11");
      Serial.write(val);
    } else if (byte == '4') {
      digitalWrite(ledPin11, LOW);
      val = digitalRead(ledPin11);
      Serial.write("11");
      Serial.write(val);
    } else if (byte == '5') {
      digitalWrite(ledPin10, HIGH);
      val = digitalRead(ledPin10);
      Serial.write("10");
      Serial.write(val);
    } else if (byte == '6') {
      digitalWrite(ledPin10, LOW);
      val = digitalRead(ledPin10);
      Serial.write("10");
      Serial.write(val);
    } else if (byte == '7') {
      digitalWrite(ledPin9, HIGH);
      val = digitalRead(ledPin9);
      Serial.write("9");
      Serial.write(val);
    } else if (byte == '8') {
      digitalWrite(ledPin9, LOW);
      val = digitalRead(ledPin9);
      Serial.write("9");
      Serial.write(val);
    } else {
      for (int thisPin = 0; thisPin < pinCount; thisPin++) {
        digitalWrite(ledPins[thisPin], HIGH);
        val = digitalRead(ledPins[thisPin]);   // read the input pin
        Serial.write(val);
        delay(500);
        digitalWrite(ledPins[thisPin], LOW);
      }

    }

    Serial.flush();
  }
}