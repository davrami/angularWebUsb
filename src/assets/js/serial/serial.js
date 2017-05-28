/**
 * Objeto serial que guarda las funciones para ver 
 * y pedir un dispositivo
 */
var serial = {};

/**
 * función para ver los dispositivos conectados
 */
serial.getPorts = function () {
  return navigator.usb.getDevices().then(devices => {
    return devices.map(device => new serial.Port(device));
  });
};


/**
 * función que demanda la conexión con un dispositivo, pasando como parámetro su vendorId
 * y opcionalmente el productId.
 */
serial.requestPort = function () {
  const filters = [
    { 'vendorId': 0x2341, 'productId': 0x8036 },
    { 'vendorId': 0x2341, 'productId': 0x8037 },
  ];
  return navigator.usb.requestDevice({ 'filters': filters }).then(
    device => new serial.Port(device)
  );
}

/**
 * constructor de un objeto serial.Port
 */
serial.Port = function (device) {
  this.device_ = device;
};

/**
 * método para conectar un dispositivo
 */
serial.Port.prototype.connect = function () {
  let readLoop = () => {
    this.device_.transferIn(5, 64).then(result => {
      this.onReceive(result.data);
      readLoop();
    }, error => {
      this.onReceiveError(error);
    });
  };

  return this.device_.open()
    .then(() => {
      if (this.device_.configuration === null) {
        return this.device_.selectConfiguration(1);
      }
    })
    .then(() => this.device_.claimInterface(2))
    .then(() => this.device_.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': 0x22,
      'value': 0x01,
      'index': 0x02
    }))
    .then(() => {
      readLoop();
    });
};

/**
 * método para desconectar un dispositivo
 */
serial.Port.prototype.disconnect = function () {
  return this.device_.controlTransferOut({
    'requestType': 'class',
    'recipient': 'interface',
    'request': 0x22,
    'value': 0x00,
    'index': 0x02
  })
    .then(() => this.device_.close());
};

/**
 * método para enviar datos al dispositivo
 */
serial.Port.prototype.send = function (data) {
  return this.device_.transferOut(4, data);
};
