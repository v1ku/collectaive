import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ChatRoom from './components/ChatRoom.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatRoom,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
