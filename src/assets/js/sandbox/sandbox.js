//objeto serial.Port
var port;
//datos que recibe de la placa
var value;
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
         * Método que se ejecuta cuando el navegador recibe datos 
         * del dispositivo.
         */
        port.onReceive = data => {
            let textDecoder = new TextDecoder();
            console.log("Recieved: " + textDecoder.decode(data));
            value = textDecoder.decode(data) + "";
            if (document.getElementById('response')) {
                document.getElementById('response').innerHTML = value;
            }
            port.lastMessage = value;

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
        if (document.getElementById('response')) {
            document.getElementById('response').innerHTML = "Connected";
        }
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

