/*eslint-disable*/
export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        $getImg(img) {
          return require(`@/assets/${img}`);
        },
      },
    });
  },
};
