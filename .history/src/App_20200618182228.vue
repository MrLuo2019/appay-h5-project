<template>
  <div id="app">
    <router-view />

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="promotion" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="vip" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="dis" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  min-height: 100vh;
  background: #1a1a1e;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  color: #fff;
  font-family: PingFang SC, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei,
    sans-serif, arial;
}
</style>
