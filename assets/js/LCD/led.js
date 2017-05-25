var port;
let textEncoder = new TextEncoder();
console.log('Ready.');
let connectButton = document.querySelector('#connect');
let led = "L"

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


function connect() {
    console.log('Connecting to ' + port.device_.productName + '...');
    port.connect().then(() => {
        console.log(port);
        console.log('Connected.');
        connectButton.textContent = 'Disconnect';
        port.onReceive = data => {

            let textDecoder = new TextDecoder();
            console.log(textDecoder.decode(data));

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