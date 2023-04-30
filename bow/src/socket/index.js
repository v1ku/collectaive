// socket/index.js
import { io } from 'socket.io-client';

const connectionOptions = {
  transports: ['websocket'],
  secure: true,
};

const socket = io(process.env.VUE_APP_SOCKET_URL, connectionOptions);

export default socket;