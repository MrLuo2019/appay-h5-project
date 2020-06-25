<template>
  <div id="app">
    <router-view />

    <van-tabbar
      v-model="active"
      :border="false"
      active-color="#d19881"
      inactive-color="#b2b2b2"
    >
      <van-tabbar-item name="home" replace to="/home">
        <template #icon="props">
          <van-icon class="font-family" size="22" name="home" />
        </template>
        <span>投注</span>
      </van-tabbar-item>
      <van-tabbar-item name="promotion" replace to="/promotion">
      优惠</van-tabbar-item
      >
      <van-tabbar-item name="vip" replace to="/vip" icon="friends-o"
        >龙门贵宾会</van-tabbar-item
      >
      <van-tabbar-item name="discover" replace to="/discover" icon="setting-o"
        >赌神榜</van-tabbar-item
      >
      <van-tabbar-item name="user" replace to="/user" icon="setting-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  height: calc(100vh - 46px);
  background: #1a1a1e;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  color: #fff;
  font-family: PingFang SC, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei,
    sans-serif, arial;
}
.van-tabbar {
  background-color: #28292f;
}
</style>
