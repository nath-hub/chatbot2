import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';
import Subscription from '../views/Subscription.vue';

const routes = [
  { path: '/', redirect: '/chat' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/chat', component: Chat, meta: { requiresAuth: true } },
  { path: '/subscription', component: Subscription, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else if ((to.path === '/login' || to.path === '/register') && token) {
    next('/chat');
  } else {
    next();
  }
});

export default router;