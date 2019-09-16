<!--
 * @Author: cjiao100
 * @Date: 2019-08-31 17:36:49
 * @LastEditors: cjiao100
 * @LastEditTime: 2019-09-15 22:55:32
 * @Description: Do not edit
 -->
<template>
  <div id="app">
    <Header />
    <router-view />
    <footer>
      <router-link tag="p" to="#" @click.native="click" >京ICP备19037260号</router-link>
    </footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header
  },
  methods: {
    click() {
      window.location.href = "http://www.beian.miit.gov.cn/"
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #333;
}
footer p {
  text-align: center;
  color: #fff;
  line-height: 50px;
}
</style>
