module.exports = {
  devServer: {
    proxy: process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : '',
  },
  publicPath: process.env.VUE_APP_MODE === 'production' ? process.env.VUE_APP_PUBLIC_PATH : '',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/global.scss";',
      },
    },
  },
};
