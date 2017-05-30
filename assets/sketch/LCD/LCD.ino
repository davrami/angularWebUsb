/**
    * Sketch que recibe un texto y lo muestra
    *por un pantalla LCD.
*/
#include <WebUSB.h>
#include <LiquidCrystal.h>
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

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