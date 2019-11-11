<template>
  <div class="Cart">
    <div class="CartTitle">
      <p class="iconfont p1">&#xe612;</p>
      <p class="p2">购物车</p>
      <p class="iconfont p3">&#xe627;</p>
    </div>
    <div class="NoShopping" v-show="!isok">
      <div class="noshopping">
        <img src="../img/no-card-oops.png" alt />
        <p class="p1">您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
        <p class="p2">去逛逛</p>
      </div>
    </div>
    <div class="shopping" v-show="isok">
      <div class="top">商品数量有限，请尽快结算</div>
      <ul class="ul1">
        <li v-for="(item,index) in img" :key="index">
          <div class="content">
            <div class="letf">
              <p class="p3"></p>
              <img :src="img[index]" alt />
            </div>
            <div class="reght">
              <p class="p4" v-text="name[index]"></p>
              <div class="type" v-if="start">
                <span>{{model[index]}} {{type[index]}}</span>
                <span>x{{num[index]}}</span>
              </div>
              <div class="jj" v-if="!start[index]">
                <button @click="jian(index)" :class="[{'jj':num[index]!=1}]">-</button>
                <p v-text="num[index]"></p>
                <button @click="jia(index)" :class="[{'jj':kc[index]!=num[index]}]">+</button>
              </div>
              <div class="price">
                <span class="sp1">￥{{price[index]}}</span>
                <span class="sp2" v-if="start[index]" @click="alter(index)">编辑</span>
                <span class="sp3" v-if="!start[index]">
                  <i @click="dele(index)">删除</i>
                  <i class="finish" @click="alter(index)">完成</i>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="footer">
        <div class="left">
          <p class="p1"></p>
          <p class="p2">全选</p>
          <p class="p3">
            <span class="sp1">合计</span>
            <span class="sp2">￥{{priceSum}}</span>
          </p>
        </div>
        <div class="reght">
          <p>
            去结算(
            <span>{{goodSum}}</span>
            )
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Dialog } from "vant";
import Footer from "../components/Footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      isok: false, //是否有商品的状态
      start: [], //编辑状态
      option: [], //选中商品状态
      img: [], //商品购物车图片
      kc: [], //商品购物车库存
      name: [], //商品购物车商品名称
      price: [], //商品购物车价格
      id: [], //商品购物车id
      type: [], //商品购物车分类
      num: [], //商品购物车数量
      model: [], //商品购物车类型
      goodSum: 0, //选中所有商品的件数
      priceSum: 0, //选中所有商品的价格总数
      goodnum: 0, //选中单件商品件数
      goodprice: 0 //选中单件商品总价
    };
  },
  //创建之后
  created() {
    if (this.getcookie("id") != undefined) {
      let img = this.getcookie("img").split("&"); //购物车中的图片
      let kc = this.getcookie("kc").split("&"); //购物车中库存
      let name = this.getcookie("name").split("&"); //购物车中商品名称
      let price = this.getcookie("price").split("&"); //购物车中商品价格
      let id = this.getcookie("id").split("&"); //购物车中商品id
      let model = this.getcookie("model").split("&"); //购物车中商品类型
      let type = this.getcookie("type").split("&"); //购物车中商品分类
      let num = this.getcookie("num").split("&"); //购物车中商品的数量

      //初始化编辑状态
      //初始化选状态
      for (let i = 0; i < num.length; i++) {
        this.start.push(true);
        this.option.push(false);
      }

      //初始化数据
      this.img = img;
      this.kc = kc;
      this.name = name;
      this.price = price;
      this.id = id;
      this.model = model;
      this.type = type;
      this.num = num;

      this.isok = true;
    } else {
      this.isok = false;
    }
  },
  //挂载之后
  mounted() {
    let list = document.querySelectorAll(".ul1 li .p3"); //单选框
    let btn = document.querySelector(".footer .left .p1"); //全选
    let _this = this;

    //单选
    for (let i = 0; i < list.length; i++) {
      //选中商品高亮
      list[i].onclick = function() {
        //点击商品的价格
        _this.goodprice = _this.price[i] * 1;
        // 点击商品的数量
        _this.goodnum = _this.num[i] * 1;

        if (this.className == "p3") {
          this.className = "p3 arver";
          _this.option.splice(i, 1, true);
          //单选更改数据
          _this.goodSum += _this.goodnum;
          _this.priceSum += _this.goodnum * _this.goodprice;
        } else {
          this.className = "p3";
          _this.option.splice(i, 1, false);
          _this.goodSum -= _this.goodnum;
          _this.priceSum -= _this.goodnum * _this.goodprice;
        }
        let sum = 0;
        //单选控制全选
        for (let j = 0; j < list.length; j++) {
          if (list[j].className == "p3") {
            sum++;
          }
        }
        if (sum == 0) {
          btn.className = "p1 arver";
        } else {
          btn.className = "p1";
        }
      };
    }
    //全选
    btn.onclick = function() {
      if (btn.className == "p1") {
        for (let i = 0; i < list.length; i++) {
          list[i].className = "p3 arver";
          btn.className = "p1 arver";
          _this.option.splice(i, 1, true);
        }
      } else {
        for (let i = 0; i < list.length; i++) {
          list[i].className = "p3";
          btn.className = "p1";
          _this.option.splice(i, 1, false);
        }
      }
    };
  },
  methods: {
    //设置cook
    setcookie(key, val, iday) {
      let now = new Date();
      now.setDate(now.getDate() + iday);
      document.cookie = key + "=" + val + ";expires=" + now + ";path=/";
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
    //删除cook
    removeCookie(key) {
      this.setcookie(key, "", -1);
    },
    jia(index) {
      //添加商品
      if (this.num[index] >= this.kc[index]) {
        this.num[index] >= this.kc[index];
        Dialog({ message: "商品仅剩" + this.kc[index] + "件" });
      } else {
        this.num.splice(index, 1, this.num[index] * 1 + 1);
        if (this.option[index]) {
          //添加商品时更改选中的总数量和总价格
          this.goodSum += 1;
          this.priceSum += this.goodnum * this.goodprice;
        }
      }
    },
    jian(index) {
      //减少商品数量
      if (this.num[index] <= 1) {
        this.num[index] >= 1;
        Dialog({ message: "至少购买" + this.num[index] + "件" });
      } else {
        this.num.splice(index, 1, this.num[index] * 1 - 1);
        if (this.option[index]) {
          this.goodSum -= 1;
          this.priceSum -= this.goodnum * this.goodprice;
        }
      }
    },
    alter(index) {
      this.start.splice(index, 1, !this.start[index]);
    },
    dele(index) {
      //删除data里的第index的数据
      this.img.splice(index, 1);
      this.kc.splice(index, 1);
      this.name.splice(index, 1);
      this.price.splice(index, 1);
      this.id.splice(index, 1);
      this.type.splice(index, 1);
      this.num.splice(index, 1);
      this.model.splice(index, 1);
      this.start.splice(index, 1);
      this.option.splice(index, 1);

      //删除cook数据,data数据替换cook数据
      if (!this.id.length) {
        this.isok = false;
        this.removeCookie("img");
        this.removeCookie("kc");
        this.removeCookie("name");
        this.removeCookie("id");
        this.removeCookie("model");
        this.removeCookie("type");
        this.removeCookie("price");
        this.removeCookie("num");
      } else {
        window.console.log(this.kc.join("&"));
        this.setcookie("img", this.img.join("&"), 7);
        this.setcookie("kc", this.kc.join("&"), 7);
        this.setcookie("name", this.name.join("&"), 7);
        this.setcookie("price", this.price.join("&"), 7);
        this.setcookie("id", this.id.join("&"), 7);
        this.setcookie("model", this.kc.model("&"), 7);
        this.setcookie("type", this.type.join("&"), 7);
        this.setcookie("num", this.num.join("&"), 7);
      }
    }
  }
};
</script>
<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}
.arver {
  background: url(../img/gg.png);
  background-size: 100% 100%;
}
.Cart {
  position: relative;
  width: 100%;
  height: 100%;
  background: #eee;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .CartTitle {
    background: #fff;
    height: 45px;
    width: 100%;
    display: flex;
    padding-left: 3%;
    padding-right: 3%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    line-height: 45px;
    border-bottom: 1px solid #eee;
    .p1 {
      font-size: 20px;
      color: #ccc;
    }
    .p3 {
      font-size: 22px;
      color: #ccc;
    }
  }
  .NoShopping {
    width: 100%;
    height: 100%;
    background: #fff;
    .noshopping {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 86px;
        height: 82px;
      }
      .p1 {
        font-size: 0.875rem;
        line-height: 0.9375rem;
        color: #333;
        margin-top: 1rem;
        padding: 0 0.75rem;
        text-align: center;
      }
      .p2 {
        width: 7.8125rem;
        height: 2.25rem;
        border-radius: 1.25rem;
        color: #fff;
        background: #fe4070;
        line-height: 2.25rem;
        text-align: center;
        margin-top: 1.4375rem;
        font-size: 0.8125rem;
      }
    }
  }
  .shopping {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #fff;
    box-sizing: border-box;
    color: #999;
    font-size: 13px;
    .top {
      margin-left: 3%;
    }
    ul {
      width: 100%;
      height: auto;
      li {
        padding-top: 10px;
        margin-top: 10px;
        padding-bottom: 10px;
        width: 100%;
        height: auto;
        background: #fff;
        border-bottom: 1px solid #eee;
        .content {
          margin-top: 5px;
          height: auto;
          width: 100%;
          display: flex;
          box-sizing: border-box;

          .letf {
            width: 35%;
            height: 100%;
            display: flex;
            .p3 {
              margin-top: 30px;
              width: 22px;
              height: 22px;
              border-radius: 50%;
              border-bottom: 1px solid #eee;
              border: 1px solid #ccc;
              margin-left: 3%;
              margin-right: 3%;
            }
            img {
              width: 84px;
              height: 84px;
            }
          }
          .reght {
            width: 65%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .p4 {
              color: #333;
              font-size: 13px;
              line-height: 20px;
            }
            .type {
              display: flex;
              width: 100%;
              justify-content: space-between;
              padding-right: 6px;
              box-sizing: border-box;
              line-height: 16px;
              font-size: 13px;
            }
            .jj {
              width: 30%;
              height: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              button {
                width: 25px;
                height: 25px;
                font-size: 14px;
                line-height: 14px;
                font-weight: 900;
                border-radius: 50%;
                color: #999;
                border: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
            .price {
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding-right: 6px;
              box-sizing: border-box;
              span {
                display: flex;
              }
              .sp1 {
                color: #fe4070;
                font-size: 16px;
              }
              .sp2 {
                color: #333;
              }

              .sp3 {
                i {
                  color: #333;
                  font-style: normal;
                  padding: 3px;
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 50px;
    display: flex;
    background: #fff;

    .left {
      width: 50%;
      height: 100%;

      display: flex;
      align-items: center;

      .p1 {
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-left: 3%;
      }
      .p2 {
        margin-left: 6%;
        color: #333;
        font-size: 15px;
      }
      .p3 {
        margin-left: 10%;
        .sp1 {
          color: #999;
          font-size: 14px;
        }
        .sp2 {
          color: #fe4070;
        }
      }
    }
    .reght {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.25rem;
        width: 135px;
        height: 35px;
        color: #fff;
        background: #fe4070;
        font-size: 14px;
      }
    }
  }
}
</style>