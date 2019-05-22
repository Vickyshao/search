const path = require('path');
// const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: './',
  outputDir: 'dist',
  runtimeCompiler: true,
  lintOnSave: process.env.NODE_ENV === 'production' ? true : 'error',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('layouts', resolve('src/layouts'));
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
    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        runtimeChunk: {
          name: 'manifest',
        },
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial', // 只打包初始时依赖的第三方
            },
            lodash: {
              name: 'chunk-lodash',
              test: /[\\/]node_modules[\\/]lodash[\\/]/,
              priority: 20,
            },
            echarts: {
              name: 'chunk-echarts',
              test: /[\\/]node_modules[\\/]echarts[\\/]/,
              priority: 20,
            },
            elementUI: {
              name: 'chunk-elementui', // 单独将 elementUI 拆包
              priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
              test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            },
            commons: {
              name: 'chunk-commons',
              test: resolve('src/components'), // 可自定义拓展你的规则
              minChunks: 3, // 最小公用次数
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': resolve('src'),
  //     },
  //   },
  //   optimization: {
  //     minimizer: [
  //       new UglifyjsPlugin({
  //         uglifyOptions: {
  //           compress: {
  //             warnings: false,
  //             drop_console: true, // consoledrop_debugger:false,
  //             pure_funcs: ['console.log'], // 移除console
  //           },
  //         },
  //       }),
  //     ],
  //   },
  // },
};
