import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Tasks from '../views/Tasks.vue';
import Account from '../views/Account.vue';
import Plants from '../views/Plants.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    props: true,
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/plants',
    name: 'plants',
    component: Plants,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
