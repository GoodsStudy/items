<template>
  <div class="clothes">
    <ul>
      <li v-for="(item,index) in goodslist" :key="index" @click="detail(item.item_id)">
        <div class="letf">
          <img :src="item.img" alt />
        </div>
        <div class="reght">
          <div class="top" v-text="item.title"></div>
          <div class="bottom">
            <p class="price">
              <span>
                <em>￥</em>
                <i v-text="item.prices"></i>
              </span>
              <span class="prices">
                <em>￥</em>
                <em v-text="item.price"></em>
              </span>
            </p>
            <p class="pl">31条评论</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "vant";
Vue.use(Card);
// import qs from "qs";
import axios from "axios";
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
    loadGood() {
      axios.get("http://localhost:3000/home").then(({ data }) => {
        this.goodslist = data;
      });
    },
    detail(id) {
      this.$router.push({ path: `/goodsDetail?${id}` });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.clothes {
  ul {
    li {
      margin-top: 10px;
      background: #fff;
      display: flex;
      height: 130px;
      width: 100%;

      .letf {
        width: 40%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .reght {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          height: 45%;
          width: 100%;
          padding-top: 10px;
          color: #333;
          font-size: 14px;
          line-height: 16px;
          padding-left: 10px;
          box-sizing: border-box;
        }
        .bottom {
          height: 45%;
          width: 100%;

          .price {
            color: #fe4070;
            font-size: 20px;
            span {
              display: inline-block;
              padding-left: 10px;
              text-align: left;
              box-sizing: border-box;
              em {
                font-style: normal;
                font-size: 13px;
              }
              i {
                font-style: normal;
              }
            }
            .prices {
              font-size: 13px;
              color: #999;
              text-decoration: line-through;
            }
          }
          .pl {
            font-size: 12px;
            color: #999;
            padding-left: 10px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>