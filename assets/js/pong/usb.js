//objeto serial.Port
var port;
//datos que envia la placa
var value;
//array con las posiciones
var posiciones;
//posición del jugador 1
var pPlayer1;
//posicion del jugador 2
var pPlayer2;
//objeto TextEncoder
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
         * del dispositivo. Separa los datos que recibimos con un split
         * y lo asigna a pPlayer1 y pPlayer2
         */
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


