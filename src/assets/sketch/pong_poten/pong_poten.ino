/**
   Sketch que permite jugar al pong.
*/

#include <WebUSB.h>

#include <LiquidCrystal.h>

LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

#define Serial WebUSBSerial

const WebUSBURL URLS[] = {
  { 1, "webusb.github.io/arduino/demos/" },
  { 0, "localhost:8000" },
};

const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };

WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);

/**
   Instancia de los pins que vamos a utilitzar.
*/
const int p1 = A0;
const int p2 = A1;
//---------------------------------------------------
const int analogPin = A0;
int value;      //variable que almacena la lectura analógica raw
int position;   //posicion del potenciometro en tanto por ciento
float voltage;  //voltage que recibe el potenciometro

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
     El loop estará constantemente pendiente que recibe datos.
     Cuando recibe un byte se irá a la parte del codigo que corresponde.
  */
  if (Serial && Serial.available()) {

    lcd.setCursor(4, 1);

    value1 = analogRead(p1); // realizar la lectura analógica raw
    position1 = map(value1, 0, 1023, 0, 100);  // convertir a porcentaje

    value2 = analogRead(p2); // realizar la lectura analógica raw
    position2 = map(value2, 0, 1023, 0, 100);  // convertir a porcentaje

    value = analogRead(analogPin); // realizar la lectura analógica raw
    position = map(value, 0, 1023, 0, 100);  // convertir a porcentaje

    voltage = value * (5.0 / 1023.0); //conversión en voltage

    int byte = Serial.read();

    if (byte == 'H') {
      // si recibe H envia las posiciones de los potenciometros
      Serial.write(position1);
      Serial.write('-');
      Serial.write(position2);
    } else if (byte == 'P') {
      //cuando recibe una P envia la posición del potenciometro
      Serial.write("Por");
      Serial.write(position);
    } else if (byte == 'V') {
      //cuando recibe una V envia los voltages qu recibe el potenciómetro
      Serial.write("Vol");
      Serial.write(voltage);
    } else {
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
