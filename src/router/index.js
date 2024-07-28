import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import LoginRegist from '../views/LoginRegist.vue';
import HomePage from '../views/HomePage.vue';
import AdminPage from '../views/AdminPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/regist',
    name: 'regist',
    component: LoginRegist
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
