const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/style.scss";
        `,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://tibamef2e.com/chd103/g2/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/chd103/g2/" : "/",
  // outputDir: "muse_music",
});
