import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import './main.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(new VueSocketIO({
    connection: 'http://localhost:5000', // Your Flask server URL
}))
app.mount('#app')
