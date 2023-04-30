import { createApp } from 'vue';
import App from './App.vue';
import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';

console.log('before creating app');

const app = createApp(App);

console.log('after creating app');

app.use(new VueSocketIO({
  debug: true,
  connection: io('http://localhost:5000'), // Change the URL to your own Socket.IO server
}));

console.log('before mounting app');

app.mount('#app');

console.log('after mounting app');
