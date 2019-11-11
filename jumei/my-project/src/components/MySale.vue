<template>
  <div class="sale">
    <ul>
      <li>
        <p class="left">
          <span class="p1"></span>
          <span class="hs">售后服务</span>
        </p>
        <p class="right"></p>
      </li>
      <li>
        <p class="left">
          <span class="p2"></span>
          <span class="hs">意见反馈</span>
        </p>
        <p class="right"></p>
      </li>
      <li>
        <p class="left">
          <span class="p3"></span>
          <span class="hs">收货地址</span>
        </p>
        <p class="right"></p>
      </li>
      <li @click="exit">
        <p class="left">
          <span class="p4"></span>
          <span class="hs">退出登录</span>
        </p>
        <p class="right"></p>
      </li>
      <li>
        <p class="left">
          <span class="p5"></span>
          <span class="hs">400-123-8888</span>
        </p>
        <p class="right"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);
export default {
  methods: {
    exit() {
      Dialog.confirm({
        title: "聚美优品",
        message: "您确定推退出吗"
      })
        .then(async () => {
          // on confirm
          this.$store.state.start = true;
          await this.ingood();
        })
        .catch(() => {
          // on cancel
        });
    },
    async ingood() {
      if (this.getcookie("model") != undefined) {
        //cook不为空的时候把cook数据传入数据库
        let img = this.getcookie("img").split("&"); //购物车中的图片
        let kc = this.getcookie("kc").split("&"); //购物车中库存
        let name = this.getcookie("name").split("&"); //购物车中商品名称
        let price = this.getcookie("price").split("&"); //购物车中商品价格
        let id = this.getcookie("id").split("&"); //购物车中商品id
        let model = this.getcookie("model").split("&"); //购物车中商品类型
        let type = this.getcookie("type").split("&"); //购物车中商品分类
        let num = this.getcookie("num").split("&"); //购物车中商品的数量
        let uid = this.getcookie("jmId");
        let obj = { img, kc, name, price, id, model, type, num, uid };
        await axios
          .post("http://localhost:3000/ingood", qs.stringify(obj))
          .then(({ data }) => {
            window.console.log(data);
            this.removeCookie("img"); //退出删除cook里的数据
            this.removeCookie("kc"); //退出删除cook里的数据
            this.removeCookie("name"); //退出删除cook里的数据
            this.removeCookie("price"); //退出删除cook里的数据
            this.removeCookie("id"); //退出删除cook里的数据
            this.removeCookie("model"); //退出删除cook里的数据
            this.removeCookie("type"); //退出删除cook里的数据
            this.removeCookie("num"); //退出删除cook里的数据
            this.removeCookie("jmId"); //退出删除cook里的数据
            this.$store.state.start = true;
          });
      }
    }, //查询cook
    getcookie(key) {
      let str = document.cookie; //username=admin; age=18
      let arr = str.split("; ");
      for (let item of arr) {
        let arr2 = item.split("=");
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    },
    //设置cook
    setcookie(key, val, iday) {
      let now = new Date();
      now.setDate(now.getDate() + iday);
      document.cookie = key + "=" + val + ";expires=" + now + ";path=/";
    },
    //删除cook
    removeCookie(key) {
      this.setcookie(key, "", -1);
    }
  }
};
</script>

<style lang="scss" scoped>
.sale {
  margin-top: 15px;
  background: #fff;
  ul {
    li {
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #eaeaea;
      .p2 {
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../img/feedback.png);
        background-size: 100% 100%;
      }
      .p3 {
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../img/address.png);
        background-size: 100% 100%;
      }

      .p4 {
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../img/logout.png);
        background-size: 100% 100%;
      }
      .p5 {
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../img/tel.png);
        background-size: 100% 100%;
      }
      .left {
        display: flex;
        align-items: center;
        .p1 {
          display: inline-block;
          width: 25px;
          height: 25px;
          background: url(../img/rmaservice.png);
          background-size: 100% 100%;
        }

        .hs {
          display: inline-block;
          height: 100%;
          color: #333;
          font-size: 16px;
          line-height: 35px;
          margin-left: 10px;
        }
      }
      .right {
        width: 20px;
        height: 20px;
        background: url(../img/advance_bg.png);
        background-size: 100% 100%;
      }
    }
  }
}
</style>