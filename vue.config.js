const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-aldof/'  // Sesuaikan dengan nama repositori GitHub kamu
    : '/'
})
