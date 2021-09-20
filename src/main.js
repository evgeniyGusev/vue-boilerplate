/*eslint-disable*/
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import GlobalMixin from '@/plugins/globalMixin';
import '@/assets/scss/global.scss';

axios.defaults.baseURL = process.env.VUE_APP_MODE === 'production'
  ? process.env.VUE_APP_BASE_URL
  : 'http://localhost:8080/';

Vue.use(GlobalMixin);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
