<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar z-index="999" fixed placeholder>
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
        <van-button type="primary" size="mini" color="#ccc" round>退出</van-button>
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

    <!-- 标签页 -->
    <van-tabs v-model="activeName" sticky>
      <van-tab title="彩票" name="caipiao">
        <van-grid :column-num="3">
          <!-- <van-grid-item
            v-for="value in 24"
            :key="value"
            icon="photo-o"
            text="文字"
          /> -->
          <van-grid-item>
    <van-image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="真人" name="zhenren">真人</van-tab>
      <van-tab title="电子" name="dianzi">电子</van-tab>
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
      ],
      activeName: "caipiao"
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
