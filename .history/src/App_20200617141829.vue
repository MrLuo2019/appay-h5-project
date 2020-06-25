<template>
  <div id="app">
    <router-view />

    <van-tabbar route v-model="tabbar_Opts.active" :placeholder="true">
      <van-tabbar-item replace to="/Home">
        <van-icon
          class="font-family"
          class-prefix="icon"
          name="home"
        />
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
      tabbar_Opts: {
        active: "home"
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
