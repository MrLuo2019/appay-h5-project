<template>
  <div id="app">
    <router-view />

    <van-tabbar route v-model="tabbar_Opts.active" :placeholder="tabbar_Opts.placeholder">
      <van-tabbar-item v-for="(item, index) in tabbar_Opts.routes" replace to="/Home">
        <van-icon
          class="font-family"
          class-prefix="icon"
          name="home"
        />
        <span>首页</span>
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
        placeholder: true,
        routes: [
          {
            name: "home",
            title: "首页",
            path: "/home"
          }
        ]
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
