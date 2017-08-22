[tutorials/getting-started](https://webpack.github.io/docs/tutorials/getting-started/#setup-compilation)

# 安装依赖

1. `yarn global add webpack webpack-dev-server`
2. 在项目录下，`yarn`

# 练习

* 运行 `webpack -w ./src/entry.js ./build/bundle.js`，然后打开 index.html
* 写成 config 后，命令变为 `webpack -w`
* 如果编译时间较长，可选择设置进度条 `webpack --progress --colors`
* 运行`webpack-dev-server`， 打开 http://localhost:8080/webpack-dev-server/bundle
注意如果只打开 http://localhost:8080/，页面不会自动更新
