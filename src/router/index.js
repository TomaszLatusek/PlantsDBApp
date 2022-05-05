import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../views/AboutView.vue';
import Login from '../views/Login.vue';
import Tasks from '../views/Tasks.vue';
import Account from '../views/Account.vue';
import Plants from '../views/Plants.vue';

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks,
    props: true,
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
