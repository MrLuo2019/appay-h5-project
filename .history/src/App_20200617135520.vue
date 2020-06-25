<template>
  <div id="app">
    <router-view />

    <van-tabbar route v-model="active" :placeholder="true">
      <van-tabbar-item replace to="/Home" name="home" icon="shouye">
        <van-icon class-prefix="icon" name="extra" />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Home" name="home" icon="shouye"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/Game" name="search" icon="search"
        >游戏</van-tabbar-item
      >
      <van-tabbar-item replace to="/Wallet" name="friends" icon="friends-o"
        >资金</van-tabbar-item
      >
      <van-tabbar-item replace to="/My" name="setting" icon="setting-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
      iconfont: {
        icon_home: "icon-shouye"
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: calc(100vh - 50px);
}
</style>
