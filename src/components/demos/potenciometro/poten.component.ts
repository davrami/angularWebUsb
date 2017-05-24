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
    constructor(private elementRef: ElementRef) { };


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

    sampleContent1 = `
         <pre >
            <code class="arduino highlight">
  #include &ltWebUSB.h&gt

  const WebUSBURL URLS[] = {
    { 1, "webusb.github.io/arduino/demos/" },
    { 0, "localhost:8000" },
  };

  const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };

  WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);

  #define Serial WebUSBSerial

  const int analogPin = A0;
  int value;      //variable que almacena la lectura analógica raw
  int position;   //posicion del potenciometro en tanto por ciento
  float voltage;
  void setup() {
    while (!Serial) {
      ;
    }
    Serial.begin(9600);
    Serial.write("Sketch begins.\r\n");
    Serial.flush();
  }
  
  void loop() {
  
    if (Serial && Serial.available()) {

      value = analogRead(analogPin); // realizar la lectura analógica raw
      position = map(value, 0, 1023, 0, 100);  // convertir a porcentaje

      voltage = value*(5.0/1023.0); 
    
      int byte = Serial.read();
      
      if (byte == 'H') {
        Serial.write("Por");
        Serial.write(position);
      }else if(byte == 'L'){
        Serial.write("Vol");
        Serial.write(voltage);
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
var port;
var value;
var valueTradc;
var valueTradcPor;
var valueTradcVol;
let textEncoder = new TextEncoder();


let connectButton = document.querySelector('#connect');


function connect() {
    console.log('Connecting to ' + port.device_.productName + '...');

    port.connect().then(() =&gt {
        console.log(port);
        console.log('Connected.');
        connectButton.textContent = 'Disconnect';
        port.onReceive = data =&gt {
            let textDecoder = new TextDecoder();
            value = textDecoder.decode(data) + "";

            if (value.indexOf("Por")) {
                valueTradcVol = value.substr(3, value.length - 1);
                $("#valVolt").html(valueTradcVol.charCodeAt());
            } else if (value.indexOf("Vol")) {
                valueTradcPor = value.substr(3, value.length - 1);
                $("#valPor").html(valueTradcPor.charCodeAt());
            }

        }
        port.onReceiveError = error =&gt {
            console.log('Receive error: ' + error);
        };
    }, error =&gt {
        console.log('Connection error: ' + error);
    });
};

connectButton.addEventListener('click', function () {
    if (port) {
        port.disconnect();
        connectButton.textContent = 'Connect';
    } else {
        serial.requestPort().then(selectedPort =&gt {
            port = selectedPort;
            connect();
        }).catch(error =&gt {
            console.log('Connection error: ' + error);
        });
    }
});

serial.getPorts().then(ports =&gt {
    if (ports.length == 0) {
        console.log('No devices found.');
    } else {
        port = ports[0];
        connect();
    }
});


$(document).on("click", "#send", function () {
    setInterval(function () { port.send(textEncoder.encode("H")); }, 500);
    porChart();


    setInterval(function () { port.send(textEncoder.encode("L")); }, 500);
    Voltchart();
});

function porChart() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = valueTradcPor.charCodeAt();

                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Porcentaje Live Data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Porcentages'
            },
            plotLines: [{
                value: 0,
                width: 100,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '&ltb&gt' + this.series.name + '&lt/b&gt&ltbr/&gt' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '&ltbr/&gt' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: '%',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i &lt= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0
                    });
                }
                return data;
            }())
        }]
    });
}

function Voltchart() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.chart('container2', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = valueTradcVol.charCodeAt()
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Voltaje Live data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 5,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '&ltb&gt' + this.series.name + '&lt/b&gt&ltbr/&gt' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '&ltbr/&gt' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'V',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i &lt= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: 0
                    });
                }
                return data;
            }())
        }]
    });

}
            </code>
        </pre>
        
        `;

}