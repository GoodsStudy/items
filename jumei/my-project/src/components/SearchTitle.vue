<template>
  <div>
    <div class="headerTitle">
      <router-link to="/searchgood">
        <em></em>
      </router-link>
      <span></span>
      <router-link class="headerLink" to="/search">
        <input v-model="text" style="color:#999" type="text" placeholder="搜索商品 分类 功效" />
      </router-link>
      <i @click="ss">搜索</i>
    </div>
    <div class="SearchList">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <i class="iconfont">&#xe601;</i>
          <p v-text="item">aaaaaa</p>
          <span class="iconfont">&#xe74b;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import "../lconfont/iconfont.css";
export default {
  data() {
    return {
      data: [],
      text: ""
    };
  },
  methods: {
    ss() {
      window.console.log(666);
    }
  },
  watch: {
    text() {
      let tex = this.text;
      axios
        .post("http://localhost:3000/search", qs.stringify({ tex }))
        .then(str => {
          this.data = str.data.data;
        });
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
  border-bottom: solid 1px #eee;
  .headerLink {
    display: inline-block;
    width: 70%;
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
    left: 18%;
  }
  em {
    display: inline-block;
    width: 7px;
    height: 14px;
    background: url(../img/left_arrow.png);
    background-size: 100% 100%;
  }
}
.SearchList {
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      display: flex;
      border-bottom: solid 1px #eee;
      height: 45px;
      width: 94%;
      color: #333;
      align-items: center;

      justify-content: space-between;
      i {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 20px;
      }
      span {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
      p {
        width: 85%;
      }
    }
  }
}
</style>

