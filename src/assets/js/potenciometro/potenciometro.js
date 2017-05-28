//objeto serial.Port
var port;
//variable que guarda el valor del potenciometro
var value;
var valueTradc;
//valor en porcentage
var valueTradcPor;
//valor en voltage
var valueTradcVol;
//instancia del objeto TextEncoder
let textEncoder = new TextEncoder();
//botón conectar
let connectButton = document.querySelector('#connect');


/**
 * función que se ejecuta cuando se conecta un dispositivo.
 */
function connect() {
    console.log('Connecting to ' + port.device_.productName + '...');

    port.connect().then(() => {
        console.log(port);
        console.log('Connected.');
        connectButton.textContent = 'Disconnect';
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
        /**
         * método que se ejecuta cuando el navegador recibe un error
         * del dispositivo.
         */
        port.onReceiveError = error => {
            console.log('Receive error: ' + error);
        };
    }, error => {
        console.log('Connection error: ' + error);
    });
};

/**
 * listener cuando se pulsa el boton de conectar
 */
connectButton.addEventListener('click', function () {
    //si el dispositivo ya esta conectado se desconecta
    if (port) {
        port.disconnect();
        connectButton.textContent = 'Connect';
    } else {
        /**
         * si no esta conectado hace un requestPort y guarda dentro
         * de port el objeto serial.Port
         */
        serial.requestPort().then(selectedPort => {
            port = selectedPort;
            connect();
        }).catch(error => {
            console.log('Connection error: ' + error);
        });
    }
});

/**
 * función que que se ejecuta cuando tiene un dipositivo paired.
 */
serial.getPorts().then(ports => {
    if (ports.length == 0) {
        console.log('No devices found.');
    } else {
        port = ports[0];
        connect();
    }
});

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

/**
 * función que crea un gráfico representando los valores
 * en porcentage
 */
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
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
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

                for (i = -19; i <= 0; i += 1) {
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

/**
 * función que crea un gráfico representando los valores
 * en Voltage
 */
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
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
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

                for (i = -19; i <= 0; i += 1) {
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