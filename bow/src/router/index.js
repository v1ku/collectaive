import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import ChatRoom from '../components/ChatRoom.vue';

const routes = [
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
    path: '/chatroom',
    name: 'chatroom',
    component: ChatRoom,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
