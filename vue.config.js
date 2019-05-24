const path = require('path');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: './',
  outputDir: 'dist',
  // runtimeCompiler: true,
  lintOnSave: process.env.NODE_ENV === 'production' ? true : 'error',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@/components', resolve('src/components'))
      .set('@/assets', resolve('src/assets'))
      .set('@/layouts', resolve('src/layouts'));
  },
  devServer: {
    port: 8086,
    proxy: {
      '/api': {
        target: '<http://localhost:5001/api/>', // 这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 请求的时候使用这个api就可以
        },
      },
    },
  },
  configureWebpack: (config) => {
    config.entry = ['babel-polyfill', './src/main.js'];
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyjsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true, // 把console.log()注释掉
              // pure_funcs: ['console.log'], // 把console.log()移除掉
            },
          },
        }),
      ],
    },
  },
};
