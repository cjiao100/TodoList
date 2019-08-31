<template>
  <Header class="header">
    <h1>待办事项</h1>
    <div id="nav">
      <router-link to="/">主页</router-link>|
      <router-link to="/about">关于</router-link>
    </div>
  </Header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  font-size: 12px;
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>