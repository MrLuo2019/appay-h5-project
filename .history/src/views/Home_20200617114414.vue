<template>
  <div class="home">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data () {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回');
    },
    onClickRight () {
      Toast('按钮');
    },
  }
}
</script>

<style lang="scss"></style>
