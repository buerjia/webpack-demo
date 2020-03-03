## webpack4.0 学习

### 安装 webpack

1. 首先初始化配置`npm init -y`
2. 然后安装 **webpack** 和 **webpack-cli**，执行命令`npm install webpack webpack-cli -D`
3. webpack 打包工具 0 配置即可打包，默认入口文件是**src/index.js**，输出文件为**dist/main.js** 支持 cmd 模块化语法`module.exports`和`require`
4. 运行打包 `npx webpack`打包文件。npx 是查找 node_modules 下的 bin 文件夹，运行相应的 webpack.cmd 文件

------

#### 基本配置

默认配置文件为**webpack.config.js** || **webpackfile.js** ，创建文件<br> 还可以自己定义文件名称，然后运行的时候直接 `npx webpack --config file-name`

```javascript
let path = require("path");
module.exports = {
  mode: "development", // mode模式 production development
  entry: "./src/index.js", // 入口文件配置
  output: {
    filename: "bundle.js", // 打包后文件名称
    path: path.resolve(__dirname, "build") // 通过path模块得到绝对路径
  }
};
```

#### package.json 配置命令

```json
"scripts": {
  "build": "webpack --config webpack.config.js",
}
```

&nbsp;&nbsp;&nbsp;然后你就可以使用 `npm run build` 来打包你的项目了

