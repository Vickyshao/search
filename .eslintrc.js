module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint", // 解析器，这里我们使用babel-eslint
    //   sourceType: 'module' // 类型为module，因为代码使用了使用了ECMAScript模块
  },
  // env: {
  //   browser: true, // 预定义的全局变量，这里是浏览器环境
  //   // node: true
  // },
  extends: ['plugin:vue/essential', 'airbnb-base'], //airbnb风格
  plugins: [
    'html', // 插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
    "vue"
  ],
  rules: {
    // "parser": "babel-eslint",
    "no-console": 0,
  },
  // settings: {
  //   "import/resolver": {
  //     webpack: {
  //       config: "vue.config.js"
  //     }
  //   }
  // }
}