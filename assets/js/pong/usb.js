var port;
var value;
var posiciones;
var pPlayer1;
var pPlayer2;
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
            value = textDecoder.decode(data) + "";
            posiciones = value.split("-");
            pPlayer1 = posiciones[0].charCodeAt();
            pPlayer2 = posiciones[1].charCodeAt();

            if (p1 != undefined || p2 != undefined) {
                p1.y = (270 * pPlayer1) / 100;
                p2.y = (270 * pPlayer2) / 100;
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


