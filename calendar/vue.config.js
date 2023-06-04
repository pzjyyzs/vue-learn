const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: 'https://www.mxnzp.com/',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
