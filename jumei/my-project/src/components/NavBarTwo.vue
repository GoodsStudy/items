<template>
  <van-sticky>
    <van-tabs class="van_tabs">
      <van-tab color="#fff" v-for="(item,index) in title" :title="item" :key="index"></van-tab>
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
      title: [
        "推荐",
        "美妆",
        "母婴健康",
        "食品保健",
        "家居",
        "礼品箱包",
        "内衣",
        "数码家电",
        "饰品配饰",
        "鞋类",
        "下期预告"
      ]
    };
  }
};
</script>

<style scoped>
.van_tabs {
  border-bottom: 0.0625rem solid #eee;
}
</style>