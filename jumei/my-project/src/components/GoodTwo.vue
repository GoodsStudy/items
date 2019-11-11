<template>
  <ul class="product-con">
    <li v-for="(item,index) in goodslist" :key="index" @click="toDeils(item.item_id)">
      <div class="product-img">
        <img :src="`${item.img}`" alt />
        <span class="comment">{{item.pl}}</span>
      </div>
      <div class="product-titel">
        <span class="goods-num">{{item.number}}</span>
        {{item.title}}
      </div>
      <div class="product-footer">
        <p class="goods-price">
          <span class="price">{{item.prices}}</span>
          <span class="one">{{item.price}}</span>
        </p>
        <p class="goods-kt">去开团</p>
      </div>
    </li>
  </ul>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.loadGood();
  },
  methods: {
    //拼团列表页渲染
    loadGood() {
      axios.get("http://localhost:3000/booking").then(({ data }) => {
        this.goodslist = data;
      });
    },
    //跳转详情页
    toDeils: function(id) {
      this.$router.push({ path: `/goodsDetail?${id} ` });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.product-con {
  background: #f5f5f5;
  margin-bottom: 50px;
  li {
    background: #fff;
    width: 100%;
    height: 258px;
    margin-bottom: 8px;
    .product-img {
      position: relative;
      display: flex;
      justify-content: center;
      img {
        width: 150px;
        height: 150px;
      }
      .comment {
        position: absolute;
        display: block;
        padding: 4px 7px;
        left: 0;
        top: 75%;
        font-size: 10px;
        line-height: 12px;
        color: #666;
        z-index: 1;
        border-left: none;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        border: 0.0625rem solid #eee;
        background: rgba(251, 251, 251, 0.8);
        box-sizing: border-box;
      }
    }
    .product-titel {
      font-size: 14px;
      max-height: 34px;
      line-height: 18px;
      padding: 0 12px;
      margin-top: 10px;
      color: #424242;
      box-sizing: border-box;
      .goods-num {
        color: #fe4070;
        display: inline-block;
        margin-left: 2px;
      }
    }
    .product-footer {
      padding: 12px 12px 12px 12px;
      display: flex;
      justify-content: space-between;
      .goods-price {
        display: flex;
        flex-direction: column;
        .price {
          font-size: 18px;
          color: #fe4070;
        }
        .one {
          color: #999;
          display: block;
          font-size: 12px;
          line-height: 12px;
        }
      }
      .goods-kt {
        width: 90px;
        height: 26px;
        margin-top: 9px;
        border-radius: 20px;
        background: #fe4070;
        color: #fff;
        text-align: center;
        line-height: 26px;
      }
    }
  }
}
</style>