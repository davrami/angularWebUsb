/**
 * Sketch que hace una lectura de un potenciometro y lo envia
 * al navegadr
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