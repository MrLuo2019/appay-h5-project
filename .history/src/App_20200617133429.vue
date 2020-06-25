<template>
  <div id="app">
    <router-view />

    <van-tabbar route v-model="active" :placeholder="true">
      <van-tabbar-item replace to="/Home" name="home" icon="shouye">
        <van-icon class="iconfont" class-prefix='icon' slot="icon" slot-scope="props" :name='props.active ? icon.home_active:icon.home_normal'></van-icon>

    <span>home</span>
————————————————
版权声明：本文为CSDN博主「傻她你呀」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_41672008/java/article/details/91040018
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
        icon_home: ''
      }
    };
  }
};
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
