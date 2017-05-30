//objeto serial.Port
var port;
//instancia del objeto TextEncoder
let textEncoder = new TextEncoder();
console.log('Ready.');
//botón conectar
let connectButton = document.querySelector('#connect');
//variable que guarda el estado del led 13
let led = "L"

/**
 * evento que se ejecuta al pulsar el boton  #led
 * envia (HIGH/LOW) para cambiar el estado del pin 13.
 */
$(document).on("click", "#led", function () {
    if (led == "H") {
        led = "L"
        $(this).textContent = 'Led Off';
    } else {
        led = "H"
        $(this).textContent = 'Led On';

    }
    if (port !== undefined) {
        port.send(textEncoder.encode(led)).catch(error => {
            console.log('Send error: ' + error);
        });
    }
});

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
            console.log(textDecoder.decode(data));
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
 * Evento que se ejecuta cuando se pulsa el botón #send.
 * Envia el texto del input y se lo envia al dispositivo.
 */
$(document).on("click", "#send", function () {
    var text = document.getElementById('text').value;
    console.log(text);
    $(".lcd").html(text);

    if (port !== undefined) {
        port.send(textEncoder.encode(text)).catch(error => {
            console.log('Send error: ' + error);
        });
    }
});