import Vue from 'vue';
import Router from 'vue-router';
import ChatView from './views/ChatView.vue';
import LoginView from './views/LoginView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: ChatView,
    },
    {
      path: '/login',
      name: 'login',
      component : LoginView,
    },
  ],
});
