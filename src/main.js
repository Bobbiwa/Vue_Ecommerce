import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import Nav from '@/components/Nav';
import store from '@/store';

Vue.config.productionTip = false;

//注册全局路由组件
Vue.component('Nav', Nav);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
