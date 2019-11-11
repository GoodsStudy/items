<template>
  <div>
    <div class="login-show">
      <p class="login-name">使用聚美账号登录</p>
      <p class="login-log">30天内自动登录</p>
    </div>

    <div class="login-reg">
      <input @click="btn" type="button" value="登录" />
    </div>
  </div>
</template>
<script>
// import { getcookie } from "../js/common.js";
import axios from "axios";
import qs from "qs";
import { Dialog } from "vant";
export default {
  methods: {
    //从main的数据仓库中，获取手机号和验证码
    btn() {
      let name = this.$store.state.name;
      let yzm = this.$store.state.yzm;
      //手机正则
      let reg = /^1[3-9]\d{9}$/;
      let isok = reg.test(name);
      if (name && yzm) {
        if (isok) {
          this.ax(name);
        } else {
          Dialog({ message: "手机号有误" });
        }
      } else {
        Dialog({ message: "填写手机号" });
      }
    },
    ax(name) {
      axios
        .post(
          "http://localhost:3000/login",
          qs.stringify({
            name
          })
        )
        .then(({ data }) => {
          //是否存在用户
          if (data == true) {
            //将手机号存入cook
            this.setcookie("jmId", name, 7);
            this.$store.state.start = false;
            Dialog({ message: "登录成功" });
            axios
              .post("http://localhost:3000/good", qs.stringify({ name }))
              .then(({ data }) => {
                //用户是否有物品在购物车
                if (data.length) {
                  //cook是否有数据，有就拼接cook，没有直接存cook
                  this.tocook(data);
                }
              });
            this.$router.push({ path: "/mylnof" });
          }
          if (data == "") {
            Dialog({ message: "登录失败，请检查信息!" });
          }
        });
    },
    //cook是否有数据，有就拼接cook，没有直接存cook
    tocook(data) {
      if (this.getcookie("img") != undefined) {
        //拼接cook数据
        let img = this.getcookie("img").split("&"); //购物车中的图片
        let kc = this.getcookie("kc").split("&"); //购物车中库存
        let name = this.getcookie("name").split("&"); //购物车中商品名称
        let price = this.getcookie("price").split("&"); //购物车中商品价格
        let id = this.getcookie("id").split("&"); //购物车中商品id
        let model = this.getcookie("model").split("&"); //购物车中商品类型
        let type = this.getcookie("type").split("&"); //购物车中商品分类
        let num = this.getcookie("num").split("&"); //购物车中商品的数量

        //添加入ccook数组
        for (let i = 0; i < data.length; i++) {
          img.push(data[i].img);
          kc.push(data[i].kc);
          name.push(data[i].name);
          price.push(data[i].price);
          id.push(data[i].id);
          model.push(data[i].model);
          type.push(data[i].type);
          num.push(data[i].num);
        }

        //存入cook
        this.setcookie("img", img.join("&"), 7);
        this.setcookie("kc", kc.join("&"), 7);
        this.setcookie("name", name.join("&"), 7);
        this.setcookie("price", price.join("&"), 7);
        this.setcookie("id", id.join("&"), 7);
        this.setcookie("model", model.join("&"), 7);
        this.setcookie("type", type.join("&"), 7);
        this.setcookie("num", num.join("&"), 7);
      } else {
        let img = [];
        let kc = [];
        let name = [];
        let price = [];
        let id = [];
        let model = [];
        let type = [];
        let num = [];

        //添加入ccook数组
        for (let i = 0; i < data.length; i++) {
          img.push(data[i].img);
          kc.push(data[i].kc);
          name.push(data[i].name);
          price.push(data[i].price);
          id.push(data[i].id);
          model.push(data[i].model);
          type.push(data[i].type);
          num.push(data[i].num);
        }

        //存入cook
        this.setcookie("img", img.join("&"), 7);
        this.setcookie("kc", kc.join("&"), 7);
        this.setcookie("name", name.join("&"), 7);
        this.setcookie("price", price.join("&"), 7);
        this.setcookie("id", id.join("&"), 7);
        this.setcookie("model", model.join("&"), 7);
        this.setcookie("type", type.join("&"), 7);
        this.setcookie("num", num.join("&"), 7);
      }
    },
    //查询cook
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
.login-show {
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  font-size: 12px;
  .login-name {
    color: #fe4070;
    padding-left: 7px;
  }
  .login-log {
    color: #999999;
    padding-right: 7px;
  }
}
.login-reg {
  width: 80%;
  margin: auto;
  input {
    margin: 5px;
    background: #feb2c5 !important;
    border-radius: 20px;
    width: 100%;
    height: 36px;
    font-size: 14px;
    color: #ffffff;
    line-height: 14px;
    text-align: center;
    border: none;
    box-sizing: border-box;
  }
}
</style>