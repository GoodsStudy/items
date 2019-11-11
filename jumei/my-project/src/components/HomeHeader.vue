<template>
  <div class="headerTitle">
    <span></span>
    <router-link class="headerLink" to="/search">
      <input type="text" placeholder="搜索商品 分类 功效" />
    </router-link>
    <i @click="list"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    list() {
      this.$router.push({ path: "/searchgood" });
    }
  }
};
</script>

<style lang="scss" scoped>
.headerTitle {
  width: 100%;
  height: 45px;
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .headerLink {
    display: inline-block;
    width: 90%;
    input {
      width: 100%;
      height: 30px;
      border-radius: 20px;
      text-align: center;
      text-align: center;
      border: none;
      background: #f5f5f5;
    }
  }

  i {
    display: inline-block;
    width: 24px;
    height: 18px;
    background: url(../img/search_list2.png);
    background-size: 100% 100%;
  }
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    background: url(../img/search_btn.png);
    background-size: 100% 100%;
    left: 21%;
  }
}
</style>

