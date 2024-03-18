const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',   // 打包后资源路径不为根目录
  transpileDependencies: true,
})
