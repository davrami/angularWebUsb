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
            console.log("Recieved: " + textDecoder.decode(data));
            value = textDecoder.decode(data) + "";
            if (document.getElementById('response')) {
                document.getElementById('response').innerHTML = value;
            }
            port.lastMessage = value;

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
        if (document.getElementById('response')) {
            document.getElementById('response').innerHTML = "Connected";
        }
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

