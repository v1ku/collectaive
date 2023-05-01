import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import ChatRoom from '../components/ChatRoom.vue';
import store from '../store'; // Import the store

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin,
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = store.state.isAuthenticated; // Use the imported store

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
