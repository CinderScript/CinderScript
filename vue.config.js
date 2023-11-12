const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // /CinderScript/ for CinderScript.github.io (github pages) hosted location
  //publicPath: process.env.NODE_ENV === "production" ? "/CinderScript/" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // Merge the transformAssetUrls option with existing options
        options.transformAssetUrls = {
          ...(options.transformAssetUrls || {}),
          // Add or modify the properties you need
          'b-img': 'src',
          'b-avatar': 'src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
          // ... you can continue adding other BootstrapVue components as needed
        };
        return options;
      });
  }
});
