<template>
  <div class="headerTitle">
    <span></span>
    <router-link class="headerLink" to="/search">
      <input type="text" placeholder="搜索商品 分类 功效" />
    </router-link>
    <router-link to="/">
      <i>返回</i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {},
  component: {}
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
  border-bottom: solid 1px #eee;
  .headerLink {
    display: inline-block;
    width: 78%;
    input {
      width: 100%;
      height: 30px;
      border-radius: 20px;
      text-indent: 40px;
      border: none;
      background: #f5f5f5;
    }
  }

  i {
    display: inline-block;
    width: 28px;
    height: 18px;
    color: #999;
    font-size: 14px;
    font-style: normal;
  }
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    background: url(../img/search_btn.png);
    background-size: 100% 100%;
    left: 11%;
  }
}
</style>

