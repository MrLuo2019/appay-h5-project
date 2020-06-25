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
    };
  }
};
</script>

<style lang="scss">

</style>
