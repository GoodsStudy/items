<template>
  <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="../img/lb1.jpg" alt />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
