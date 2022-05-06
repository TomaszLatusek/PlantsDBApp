import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSessionStorage from "vue-sessionstorage";

const app = createApp(App).use(router).mount('#app');