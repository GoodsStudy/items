<template>
  <van-nav-bar
    title="登录"
    right-text="注册"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/mylnof" });
      this.$store.state.name = "";
    },
    onClickRight() {
      this.$router.push({ path: "/reg" });
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__text {
  color: #333;
}
.van-nav-bar__arrow {
  color: #808080;
}
</style>