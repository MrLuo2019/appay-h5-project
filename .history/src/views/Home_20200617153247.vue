<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar :fixed="true">
      <template #left>
        <van-icon name="gem-o" size="25px" />
      </template>
      <template #right>
        <van-image
          round
          width="0.8rem"
          height="0.8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="user">游客</span>
        <van-button type="primary" size="mini" round>退出</van-button>
      </template>
    </van-nav-bar>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- 通知栏 -->
    <van-notice-bar
      left-icon="volume-o"
      color="#1989fa"
      background="#ecf9ff"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />

    <!-- 通知栏 -->
    <van-tabs v-model="activeName">
      <van-tab title="标签 1" name="a">内容 1</van-tab>
      <van-tab title="标签 2" name="b">内容 2</van-tab>
      <van-tab title="标签 3" name="c">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style lang="scss">
.user {
  margin: 0 10px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
