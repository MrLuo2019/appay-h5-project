<template>
  <div class="invest">
    <!-- 通知栏 -->
    <van-notice-bar
      class="container"
      color="#b2b2b2"
      background="#1a1a1e"
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />

    <!-- 导航栏 -->
    <van-nav-bar :border="false">
      <template #left>
        <van-image
          width="150"
          src="https://a04front.liweiyameirong.com/cdn/A04FM/assets/img/new-logo.e473756e.png_.webp"
        />
      </template>
      <template #right>
        <van-button color="#363b4f" size="small">登录</van-button>
        <van-button
          color="linear-gradient(44deg,#c7977c,#ad7a62)"
          size="small"
          style="margin-left: 10px;"
          >注册</van-button
        >
      </template>
    </van-nav-bar>

    <!-- 轮播图 -->
    <van-row class="container">
      <van-col span="24">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
          <van-swipe-item>
            <van-image
              src="https://a04front.liweiyameirong.com/cdn/A04FM/externals/img/_wms/h5-top-banner/hyrh5bn.jpg_.webp"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              src="https://a04front.liweiyameirong.com/cdn/A04FM/externals/img/_wms/h5-top-banner/hyrh5bn.jpg_.webp"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              src="https://a04front.liweiyameirong.com/cdn/A04FM/externals/img/_wms/h5-top-banner/hyrh5bn.jpg_.webp"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
              src="https://a04front.liweiyameirong.com/cdn/A04FM/externals/img/_wms/h5-top-banner/hyrh5bn.jpg_.webp"
            />
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>

    <!-- 宫格 -->
    <div class="container">
      <van-row class="margin-top-5">
        <van-col span="24">
          <van-image
            src="https://a04front.liweiyameirong.com/cdn/A04FM/assets/img/new-brand.617c9840.png_.webp"
          />
        </van-col>
      </van-row>
      <van-row class="margin-top-5" gutter="10">
        <van-col span="14">
          <van-image
            src="https://a04front.liweiyameirong.com/cdn/A04FM/assets/img/agqj2x.085c5fa9.png_.webp"
          />
        </van-col>
        <van-col span="10">
          <van-image
            src="https://a04front.liweiyameirong.com/cdn/A04FM/assets/img/gjtttt.db451f7d.png_.webp"
          />
        </van-col>
      </van-row>
      <van-row class="margin-top-5">
        <van-col span="24">
          <van-image
            src="https://a04front.liweiyameirong.com/cdn/A04FM/assets/img/as2x.d14963b8.png_.webp"
          />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invest",
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "@assets/css/invest.less";
</style>
