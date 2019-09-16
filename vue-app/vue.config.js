/*
 * @Author: cjiao100
 * @Date: 2019-09-05 21:10:21
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-05 21:10:21
 * @Description: Do not edit
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "",
  indexPath: "index.html",
  filenameHashing: true,
  // 反向代理
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://47.94.45.217/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
    // before: app => {}
  }
};
