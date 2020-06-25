<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="btns">
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <van-progress :percentage="10" />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      timer: 10
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
.btns {
  button {
    font-size: 18px;
  }
}
</style>
