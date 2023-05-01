// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import socket from './socket';

const app = createApp(App);

app.use(router);
app.use(store);

app.config.globalProperties.$socket = socket;

app.mount('#app');
