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
    <van-nav-bar>
      <template #left>
        <span></span>
      </template>
      <template #right>
        
      </template>
    </van-nav-bar>
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
