<template>
  <div id="app">
    <router-view />

    <van-tabbar
      v-model="active"
      :border="false"
      active-color="#d19881"
      inactive-color="#b2b2b2"
    >
      <van-tabbar-item name="invest" replace to="/invest">
        <template #icon="">
          <van-icon class="font-family" size="22" name="invest" />
        </template>
        <span>投注</span>
      </van-tabbar-item>
      <van-tabbar-item name="promotion" replace to="/promotion">
        <template #icon="">
          <van-icon class="font-family" size="22" name="promotion" />
        </template>
        <span>优惠</span>
      </van-tabbar-item>
      <van-tabbar-item name="vip" replace to="/vip">
        <template #icon="">
          <van-icon class="font-family" size="22" name="vip" />
        </template>
        <span>龙门贵宾会</span>
      </van-tabbar-item>
      <van-tabbar-item name="discover" replace to="/discover">
        <template #icon="">
          <van-icon class="font-family" size="22" name="discover" />
        </template>
        <span>赌神榜</span>
      </van-tabbar-item>
      <van-tabbar-item name="user" replace to="/user">
        <template #icon="">
          <van-icon class="font-family" size="22" name="user" />
        </template>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "invest",
      tabbar_opts: {
        active: "invest",
        datas: [
          {
            name: "invest",
            title: "投标"
          },{
            name: "promotion",
            title: "优惠"
          },{
            name: "vip",
            title: "龙门贵宾会"
          },{
            name: "discover",
            title: "赌神榜"
          },{
            name: "user",
            title: "我的"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  height: calc(100vh - 50px);
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
