import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home/index.vue';
import Login from '../pages/Login/index.vue';
import Register from '../pages/Register/index.vue';
import Search from '../pages/Search/index.vue';

export default new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/Register', component: Register },
    { path: '/Search', component: Search },
  ],
});
