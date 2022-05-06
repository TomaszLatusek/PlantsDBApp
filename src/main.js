import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSessionStorage from "vue-sessionstorage";

// Vue.use(VueSessionStorage);
// Vue.config.productionTip = false;

createApp(App).use(router, VueSessionStorage).mount('#app');

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app');
