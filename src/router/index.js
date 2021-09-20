import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main.vue';

Vue.use(VueRouter);
const defaultTitle = 'JBL 75 лет';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      title: 'Главная страница',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_MODE === 'production' ? process.env.VUE_APP_PUBLIC_PATH : '/',
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || defaultTitle;
  });
});

export default router;
