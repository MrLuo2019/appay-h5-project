<template>
  <div id="app">
    <router-view />

    <van-tabbar route v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item name="home" replace to="/home" icon="home-o">投注</van-tabbar-item>
      <van-tabbar-item name="promotion" replace to="/home" icon="search">优惠</van-tabbar-item>
      <van-tabbar-item name="vip" replace to="/home" icon="friends-o">龙门贵宾会</van-tabbar-item>
      <van-tabbar-item name="discover" icon="setting-o">赌神榜</van-tabbar-item>
      <van-tabbar-item name="user" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "name"
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
