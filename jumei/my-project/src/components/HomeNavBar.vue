<template>
  <van-sticky>
    <van-tabs>
      <van-tab fixed="true" color="#fff" v-for="(item,index) in title" :title="item" :key="index"></van-tab>
    </van-tabs>
  </van-sticky>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Sticky } from "vant";

Vue.use(Sticky);
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      title: ["首页", "极速免税店", "母婴", "轻奢", "名品特卖"]
    };
  }
};
</script>

