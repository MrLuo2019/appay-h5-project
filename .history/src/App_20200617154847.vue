<template>
  <div id="app">
    <router-view />

    <!-- 标签栏 -->
    <van-tabbar
      v-model="tabbar_Opts.active"
      route
      placeholder
    >
      <van-tabbar-item
        v-for="(item, index) in tabbar_Opts.routes"
        :key="index"
        :to="item.path"
        replace
      >
        <van-icon class="font-family center" class-prefix="icon" :name="item.name" />
        <span>{{ item.title }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar_Opts: {
        active: "home",
        routes: [
          {
            name: "home",
            title: "首页",
            path: "/Home"
          },
          {
            name: "game",
            title: "游戏",
            path: "/Game"
          },
          {
            name: "wallet",
            title: "金额",
            path: "/Wallet"
          },
          {
            name: "my",
            title: "我的",
            path: "/My"
          }
        ]
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
}
</style>
