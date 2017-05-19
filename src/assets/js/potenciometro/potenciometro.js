var port;
var value;
var valueTradc;
var valueTradcPor;
var valueTradcVol;
let textEncoder = new TextEncoder();

document.addEventListener('DOMContentLoaded', event => {
    let connectButton = document.querySelector('#connect');


    function connect() {
        console.log('Connecting to ' + port.device_.productName + '...');

        port.connect().then(() => {
            console.log(port);
            console.log('Connected.');
            connectButton.textContent = 'Disconnect';
            port.onReceive = data => {
                let textDecoder = new TextDecoder();
                value = textDecoder.decode(data)+"";
                
                if(value.indexOf("Por")){
                    valueTradcVol = value.substr(3,value.length-1);
                    $("#valVolt").html(valueTradcVol.charCodeAt());
                }else if(value.indexOf("Vol")){
                    valueTradcPor = value.substr(3,value.length-1);
                    $("#valPor").html(valueTradcPor.charCodeAt());
                }
           
            }
            port.onReceiveError = error => {
                console.log('Receive error: ' + error);
            };
        }, error => {
            console.log('Connection error: ' + error);
        });
    };

    connectButton.addEventListener('click', function () {
        if (port) {
            port.disconnect();
            connectButton.textContent = 'Connect';
        } else {
            serial.requestPort().then(selectedPort => {
                port = selectedPort;
                connect();
            }).catch(error => {
                console.log('Connection error: ' + error);
            });
        }
    });

    serial.getPorts().then(ports => {
        if (ports.length == 0) {
            console.log('No devices found.');
        } else {
            port = ports[0];
            connect();
        }
    });
});

