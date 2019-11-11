<template>
  <div>
    <div class="SearchGoodTitle">
      <span @click="back" class="iconfont">&#xe612;</span>
      <p v-text="this.$store.state.datails[0].medium_name"></p>
      <i @click="back" class="iconfont">&#xe627;</i>
    </div>
    <div class="SearchGoodImg">
      <img :src="`${this.$store.state.datails[0].img}`" alt />
    </div>
    <div class="SearchGoodConten">
      <div class="ContenPrice">
        <p class="left">
          <span class="PriceNew">￥{{this.$store.state.datails[0].price}}</span>
          <span class="Price">￥{{this.$store.state.datails[0].prices}}</span>
        </p>
        <p class="right" @click="btn">今日上新</p>
      </div>
    </div>
  </div>
</template>

<script>
import "../lconfont/iconfont.css";

export default {
  methods: {
    back() {
      this.$router.push({ path: "/booking" });
    },
    btn() {
      window.console.log(this.$store.state.datails[0]);
    }
  }
};
</script>

<style lang="scss" scoped>
.SearchGoodTitle {
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #999;
  span {
    display: inline-block;
    width: 37px;
    font-size: 18px;
    text-align: center;
  }
  p {
    width: 290px;
    text-align: center;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #333;
  }
  i {
    display: inline-block;
    width: 40px;

    font-size: 20px;
    text-align: center;
  }
}
.SearchGoodImg {
  img {
    width: 375px;
    height: 375px;
    display: inline-block;
  }
}
.SearchGoodConten {
  width: 100%;
  height: 50px;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  .ContenPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      .PriceNew {
        color: #f33873;
        font-size: 24px;
      }
      .Price {
        color: #666666;
        font-size: 13px;
        text-decoration: line-through;
      }
    }
    .right {
      font-weight: 400;
      color: #666;
      font-size: 13px;
    }
  }
}
</style>