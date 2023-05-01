import io from 'socket.io-client';

const SocketIO = {};

SocketIO.install = function(app, options) {
  const connectionOptions = {
    transports: ['websocket'],
    secure: true,
  };

  const socket = io(process.env.VUE_APP_SOCKET_URL, Object.assign(connectionOptions, options));

  app.config.globalProperties.$socket = socket;

  app.config.globalProperties.$socketEmit = function(eventName, data) {
    if (data !== undefined) {
      socket.emit(eventName, data);
    } else {
      socket.emit(eventName);
    }
  };

  app.config.globalProperties.$socketOn = function(eventName, callback) {
    socket.on(eventName, callback);
  };
};

export default SocketIO;
