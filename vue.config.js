const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 生产环境路径：/仓库名/
  publicPath: process.env.NODE_ENV === 'production' ? '/xxjieshao/' : '/'
})
