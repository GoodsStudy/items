<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/" @click="noe(0)">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="booking" @click="noe(1)">拼团</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="cart" @click="noe(2)">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="mylnof" @click="noe(3)">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import { Tabbar, TabbarItem } from "vant";
Vue.use(VueRouter);
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: this.$store.state.active,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      }
    };
  },

  methods: {
    noe(index) {
      this.$store.state.active = index;
    },
    //查询cook
    getcookie(key) {
      let str = document.cookie; //username=admin; age=18
      let arr = str.split("; ");
      for (let item of arr) {
        let arr2 = item.split("=");
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    }
  }
};
</script>