import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSocketIOExt from 'vue-socket.io-extended';
import socket from './socket';

import './main.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueSocketIOExt, socket);
app.mount('#app');
