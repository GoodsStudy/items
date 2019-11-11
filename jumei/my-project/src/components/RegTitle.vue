<template>
  <div>
    <van-nav-bar
      title="注册"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/mylnof" });
    },
    onClickRight() {
      this.$router.push({ path: "/login" });
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