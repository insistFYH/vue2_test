const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //   devServer: {
  //     proxy: 'http://localhost:5000'
  //   }
  devServer: {
    proxy: {
      '/api1': {
        pathRewrite: { '^/api1': '' },
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      },
      '/api2': {
        pathRewrite: { '^/api2': '' },
        target: 'http://localhost:5001',
        changeOrigin: true
      }
    }
  }
})
