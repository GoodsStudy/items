<template>
  <van-count-down :time="time" />
</template>

<script>
import Vue from "vue";
import { CountDown } from "vant";
Vue.use(CountDown);
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
};
</script>
<style lang="scss" scoped>
</style>