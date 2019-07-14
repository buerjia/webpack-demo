const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    app: "./src" // 需要打包的文件入口 默认为./src/index.js文件
  },
  output: {
    publicPath: __dirname + "/dist/", // js 引用路径或者cdn地址
    path: path.resolve(__dirname, "dist"),// 打包文件的输出目录
    filename: "guoyi_test.js", // 打包后生产的js文件名称
  },
  plugins: [
    //默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    new CleanWebpackPlugin(),
  ],
  module:{// 配置 loader(加载器)
    rules:[
      {
        test: /\.js$/, // 使用正则匹配js文件
        exclude:/node_modules/,// 排除node包
        use:{
          loader:"babel-loader" // 使用babel-loader .babelrc文件是配置babel的
        }
      }
    ]
  }
}
// console.log(__dirname);// 根目录绝对路径 E:\Desktop\file\buerjia\webpack-demo
console.log(path.resolve(__dirname, "dist"));// E:\Desktop\file\buerjia\webpack-demo\dist