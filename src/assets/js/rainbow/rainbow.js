var port;
var value;
let textEncoder = new TextEncoder();


    let connectButton = document.querySelector('#connect');


    function connect() {
        console.log('Connecting to ' + port.device_.productName + '...');

        port.connect().then(() => {
            console.log(port);
            console.log('Connected.');
            connectButton.textContent = 'Disconnect';
            port.onReceive = data => {
                let textDecoder = new TextDecoder();

                console.log("Recieved: " + textDecoder.decode(data).charCodeAt(2));

                value = textDecoder.decode(data) + "";
                /*
                if(value.includes("12")){
                    $("#12val").html(value.charCodeAt(2))
                }else if(value.includes("11")){
                    $("#11val").html(value.charCodeAt(2))
                }else if(value.includes("10")){
                    $("#10val").html(value.charCodeAt(2))
                }else {
                   $("#9val").html(value.charCodeAt(2))
                }*/


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





