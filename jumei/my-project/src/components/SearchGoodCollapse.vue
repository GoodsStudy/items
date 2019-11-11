<template>
  <div class="Collapse">
    <ul>
      <li>
        <p class="name">分期</p>
        <p class="title">该商品最多可享花呗12期分期购买福利</p>
      </li>
      <li>
        <p class="name">促销</p>
        <p class="title2">满99元减30元,满199元减60元</p>
      </li>
      <li>
        <p class="name">地址</p>
        <p class="title2">北京市-市辖区-东城区</p>
      </li>
      <li>
        <p class="name">运费</p>
        <p class="title2">件数满1件， 全国包邮</p>
      </li>
      <li>
        <p class="name">说明</p>
        <p class="title2">该商品最多可享花呗12期分期购买福利</p>
      </li>
      <li @click="type">
        <p class="name">请选择</p>
        <p class="title2">
          <span v-text="this.$store.state.model"></span>
          &nbsp;
          <span
            v-if="this.$store.state.size_attr[1]"
            v-text="this.$store.state.typeify"
          ></span>
        </p>
      </li>
    </ul>
    <!-- <div class="classify">
      <div class="letf">请选择</div>
      <div class="reight">
        <p class="p1">型号 分类</p>
      </div>
    </div>-->
  </div>
</template>

<script>
// import axios from "axios";
// import qs from "qs";
export default {
  methods: {
    type() {
      this.$store.state.goodStart = true;
      //   let id = window.location.href.split("?")[1];
      //   let type = this.$store.state.datails[0].type;
      //   axios
      //     .post("http://localhost:3000/togood", qs.stringify({ id, type }))
      //     .then(str => {
      //       this.$store.state.initImg = str.data.data.result.size[0].img;
      //       this.$store.state.size = str.data.data.result.size;
      //       this.$store.state.size_attr = str.data.data.result.size_attr;
      //     });
    }
  }
};
</script>

<style lang="scss" scoped>
.Collapse {
  margin-top: 10px;
  margin-bottom: 50px;
  ul {
    li {
      height: 36px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      .name {
        width: 22%;
        color: #999;
        font-size: 13px;
        line-height: 13px;
        padding-left: 15px;
        box-sizing: border-box;
      }
      .title {
        color: #fe4070;
        font-size: 13px;
        line-height: 13px;
      }
      .title2 {
        color: #333;
        font-size: 13px;
        line-height: 13px;
      }
    }
  }
  .classify {
    margin-top: 10px;
    height: 40px;
    width: 100%;
    display: flex;
    .letf {
      width: 20%;
      height: 100%;
      color: #999999;
      text-align: left;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .reight {
      width: 80%;
      height: 100%;
      .p1 {
        text-indent: 3%;
        font-size: 12px;
        color: #333333;
      }
    }
  }
}
</style>