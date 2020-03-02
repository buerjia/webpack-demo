let path = require("path");
module.exports = {
  mode:"development", // mode模式 production development
  entry:"./src/index.js", // 入口文件配置 相对路径
  output:{
    filename:"bundle.js", // 打包后文件名称
    path: path.resolve(__dirname,"build"), // 通过path模块得到绝对路径
  }
}