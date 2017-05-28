/**
 * Sketch sandbox donde definimos unos pins analogicos y digitales. Creamos
 * funciones en el frontend y se ejecuta en la placa, tenemos independecia de código
 * en el dispositivo.
 */
#include <WebUSB.h>
#include <LiquidCrystal.h>
LiquidCrystal lcd(2, 3, 4, 5, 6, 7);

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
const int ledPin13 = 13;
const int ledPin12 = 12;
const int ledPin11 = 11;
const int ledPin10 = 10;
const int pins [] = {10, 11, 12, 13};
boolean states [] = {0, 0, 0, 0};
void writeString(String stringData) {
  for (int i = 0; i < stringData.length(); i++) {
    Serial.write(stringData[i]);
  }
  Serial.flush();
}

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("Sketch begins");
  Serial.flush();
  pinMode(ledPin10, OUTPUT);
  pinMode(ledPin11, OUTPUT);
  pinMode(ledPin12, OUTPUT);
  pinMode(ledPin13, OUTPUT);
  lcd.begin(16, 2);
}

void loop() {
  /**
     El loop estará constantemente pendiente que recibe datos.
     Cuando recibe un byte se irá a la parte del codigo que corresponde.
  */
  int byte;
  int pin = 0;
  boolean state;
  boolean analog = false;

  if (Serial && Serial.available()) {
    lcd.clear();
    lcd.setCursor(0, 0);
    while (Serial.available() > 0) {
      byte = Serial.read();
      lcd.write(byte);
      //A0, A0, 10, 11, 12, 13

      switch (byte) {
        case '0'  :
          pin = 10;
          break;
        case '1'  :
          pin = 11;
          break;
        case '2'  :
          pin = 12;
          break;
        case '3'  :
          pin = 13;
          break;
        case 'L'  :
          state = false;
          break;
        case 'H'  :
          state = true;
          break;
        case 'A'  :
          analog = true;
          break;
      }
    }
  }

  if (pin > 0) {
    lcd.setCursor(0,1);
    if (!analog) {    
      if (state) {
        writeString(String(pin)+" HIGH");
        lcd.print(String(pin)+" HIGH");
      } else {
        writeString(String(pin)+" LOW");
        lcd.print(String(pin)+" LOW");
      }
      states[pin - 10] = state;
    }
  }

  if (!analog) {
    for (int a = 0 ; a < sizeof(pins)-1 ; a++) {
      if (states[a]) {
        digitalWrite(pins[a], HIGH);
      } else {
        digitalWrite(pins[a], LOW);
      }
    }
    
  } else {
    if(pin == 10 && analog){
           writeString("A0: "+ String(analogRead(A0)*(5.0/1023.0))+" volts");
           lcd.print("A0: "+ String(analogRead(A0)*(5.0/1023.0))+" volts");
    }else if(pin == 11 && analog){
           writeString("A1: "+ String(analogRead(A1)*(5.0/1023.0))+" volts");
           lcd.print("A1: "+ String(analogRead(A1)*(5.0/1023.0))+" volts");
    }
  }
 
}