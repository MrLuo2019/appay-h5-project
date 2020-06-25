<template>
  <div>
    <!-- 通知栏 -->
    <van-notice-bar
      color="#b2b2b2"
      background="#1a1a1e"
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />

    <!-- 导航栏 -->
    <van-nav-bar :border="false">
      <template #left>
        <span>LOGO</span>
      </template>
      <template #right>
        <van-button color="#363b4f" size="small">登录</van-button>
        <van-button color="linear-gradient(44deg,#c7977c,#ad7a62)" size="small">注册</van-button>
      </template>
    </van-nav-bar>

    <!-- lun -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "@assets/css/home.less";
</style>
