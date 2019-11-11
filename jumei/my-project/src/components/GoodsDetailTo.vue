<template>
  <div class="Goddss">
    <div class="toTop" @click="exit"></div>
    <div class="toGoods">
      <div class="titel">
        <div class="img">
          <img :src="this.$store.state.initImg" alt />
        </div>
        <div class="price">
          <p class="p1" v-text="this.$store.state.initPrice">￥49</p>
          <p class="p2">
            <span v-text="this.$store.state.model"></span>
            <span v-if="this.$store.state.size_attr[1]">{{this.$store.state.typeify}}</span>
          </p>
        </div>
        <div @click="exit" class="exit">X</div>
      </div>
      <div class="conten">
        <div class="type">
          <dl class="dl1">
            <dt v-text="this.$store.state.size_attr[0].title"></dt>
            <dd
              class="d1"
              v-for="(item,index) in this.$store.state.size_attr[0].item"
              :key="index"
              v-text="item.value"
            ></dd>
          </dl>
        </div>
        <div class="classify" v-if="this.$store.state.size_attr[1]">
          <dl v-if="this.$store.state.size_attr[0]" class="d2">
            <dt v-text="this.$store.state.size_attr[1].title"></dt>
            <dd
              v-for="(item,index) in this.$store.state.size_attr[1].item"
              :key="index"
              v-text="item.value"
            ></dd>
          </dl>
        </div>
      </div>
      <div class="goNum">
        <div class="top">
          <div class="go">购买数量</div>
          <div class="num">
            <button @click="jian" :class="[{'jj':xStart}]">-</button>
            <p v-text="this.$store.state.num"></p>
            <button @click="jia" :class="[{'jj':jStart}]">+</button>
          </div>
        </div>
        <div class="bottom">
          <p class="p1" @click="toGood">加入购物车</p>
          <p class="p2">立即购买</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      xinghao: "",
      fenlei: "",
      num: 0,

      jStart: true, //增加数量是否到库存的状态
      xStart: false //减少数量最少为1的状态
    };
  },

  methods: {
    jia() {
      //添加商品
      if (this.$store.state.mxn == 0) {
        this.$store.state.num = 0;
        this.jStart = false;
      } else {
        if (this.$store.state.num >= this.$store.state.mxn) {
          this.$store.state.num = this.$store.state.mxn;
          this.jStart = false;
        } else {
          this.$store.state.num++;
          this.jStart = true;
        }
      }

      this.xStart = true;
    },
    jian() {
      //减少商品数量
      if (this.$store.state.mxn == 0) {
        this.$store.state.num = 0;
        this.xStart = false;
      } else {
        if (this.$store.state.num <= 1) {
          this.$store.state.num = 1;
          this.xStart = false;
        } else {
          this.$store.state.num--;
          this.xStart = true;
        }
      }

      this.jStart = true;
    },

    exit() {
      this.$store.state.goodStart = false;
    },
    //选中高亮
    btn(dd, type) {
      for (let i = 0; i < dd.length; i++) {
        dd[i].onclick = () => {
          for (let j = 0; j < dd.length; j++) {
            dd[j].className = "";
          }
          //选中高亮
          dd[i].className = "active";
          //改变显示选中的型号和类型
          if (type == "top") {
            this.$store.state.model = dd[i].innerHTML;
          } else {
            this.$store.state.typeify = dd[i].innerHTML;
          }
          this.select();
        };
      }
    },
    //选中规格改变初始值
    select() {
      let model = this.$store.state.model;
      let typeify = this.$store.state.typeify;
      if (this.$store.state.size_attr.length > 1) {
        //型号和分类都存在
        this.$store.state.size.map(item => {
          if (model == item.attribute && typeify == item.size) {
            this.$store.state.initImg = item.img; //更改选中型号和类型的图片
            this.$store.state.initPrice = item.jumei_price; //更改选中型号和类型的价格
            this.$store.state.mxn = item.stock; //更改选中型号和类型的库存
          }
        });
      } else {
        //只有型号
        this.$store.state.size.map(item => {
          if (model == item.name) {
            this.$store.state.initImg = item.img; //更改选中型号和类型的图片
            this.$store.state.initPrice = item.jumei_price; //更改选中型号和类型的价格
            this.$store.state.mxn = item.stock; //更改选中型号和类型的库存
          }
        });
      }
    },
    //加入购物车
    toGood() {
      let kc = this.$store.state.mxn;
      if (kc == 0) {
        Dialog({ message: "商品已售空" });
      } else {
        let cookimg = this.getcookie("img"); //购物车中的图片
        let cookkc = this.getcookie("kc"); //购物车中库存
        let cookname = this.getcookie("name"); //购物车中商品名称
        let cookprice = this.getcookie("price"); //购物车中商品价格
        let cookid = this.getcookie("id"); //购物车中商品id
        let cookmodel = this.getcookie("model"); //购物车中商品类型
        let cooktype = this.getcookie("type"); //购物车中商品分类
        let cooknum = this.getcookie("num"); //购物车中商品的数量

        let id = window.location.href.split("?")[1];
        let img = this.$store.state.initImg.split("?")[0];
        let name = this.$store.state.goodname;
        let price = this.$store.state.initPrice;
        let kc = this.$store.state.mxn;
        let num = this.$store.state.num;
        let model = this.$store.state.model;
        let type = this.$store.state.typeify;

        if (this.$store.state.size_attr.length > 1) {
          if (cookid) {
            //cook中存在数据
            //将数据传入cook
            this.setcookie("img", cookimg + "&" + img, 7);
            this.setcookie("kc", cookkc + "&" + kc, 7);
            this.setcookie("name", cookname + "&" + name, 7);
            this.setcookie("price", cookprice + "&" + price, 7);
            this.setcookie("id", cookid + "&" + id, 7);
            this.setcookie("model", cookmodel + "&" + model, 7);
            this.setcookie("type", cooktype + "&" + type, 7);
            this.setcookie("num", cooknum + "&" + num, 7);
          } else {
            //第一次存入cook
            //将数据传入cook
            this.setcookie("img", img, 7);
            this.setcookie("kc", kc, 7);
            this.setcookie("name", name, 7);
            this.setcookie("price", price, 7);
            this.setcookie("id", id, 7);
            this.setcookie("model", model, 7);
            this.setcookie("type", type, 7);
            this.setcookie("num", num, 7);
          }
          Dialog({ message: "添加成功" });
        } else {
          if (cookid) {
            this.setcookie("img", cookimg + "&" + img, 7);
            this.setcookie("kc", cookkc + "&" + kc, 7);
            this.setcookie("name", cookname + "&" + name, 7);
            this.setcookie("price", cookprice + "&" + price, 7);
            this.setcookie("id", cookid + "&" + id, 7);
            this.setcookie("model", cookmodel + "&" + model, 7);
            this.setcookie("type", cooktype, "&null" + 7);
            this.setcookie("num", cooknum + "&" + num, 7);
          } else {
            //第一次存入cook
            //将数据传入cook
            this.setcookie("img", img, 7);
            this.setcookie("kc", kc, 7);
            this.setcookie("name", name, 7);
            this.setcookie("price", price, 7);
            this.setcookie("id", id, 7);
            this.setcookie("model", model, 7);
            this.setcookie("num", num, 7);
            this.setcookie("type", "null", 7);
          }
          Dialog({ message: "添加成功" });
        }
      }
    },
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
    }
  },

  async mounted() {
    //型号高亮
    let dd = await document.querySelectorAll(".dl1 dd");
    this.btn(dd, "top");

    //分类高亮
    let tt = await document.querySelectorAll(".d2 dd");
    this.btn(tt, "bottom");
  }
};
</script>

<style lang="scss" >
* {
  padding: 0;
  margin: 0;
}

.jj {
  background: #fff;
}
.active {
  background: #fe4070;
}
.Goddss {
  width: 100%;
  height: 100%;
  .toTop {
    height: 37%;
    width: 100%;
  }
  .toGoods {
    position: absolute;
    bottom: 0;
    height: 63%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #fff;
    .titel {
      width: 90%;
      height: 32%;
      border-bottom: 1px solid #eaeaea;
      .img {
        position: absolute;
        top: -20px;
        left: 10px;
        width: 100px;
        height: 100px;
        img {
          width: 100px;
          height: 100px;
          box-shadow: 1px 1px 6px 1px #ccc;
        }
      }
      .price {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;

        p {
          width: 125px;
        }
        .p1 {
          font-size: 22px;
          line-height: 22px;
        }
        .p2 {
          margin-top: 20px;
          font-size: 12px;
          line-height: 12px;
          span {
            width: auto;
            padding: 3px;
          }
        }
      }
      .exit {
        width: 28px;
        position: absolute;
        font-size: 22px;
        color: #999;
        top: 5px;
        right: 0;
      }
    }
    .conten {
      width: 90%;
      height: 75%;
      overflow: auto;
      border-bottom: 1px solid #eaeaea;
      .type,
      .classify {
        dl {
          display: flex;
          flex-wrap: wrap;
          dt {
            width: 100%;
            color: #666666;
            font-size: 12px;
            margin-top: 10px;
          }
          dd {
            border: 1px solid #e0e0e0;
            border-radius: 40px;
            line-height: 16px;
            height: 14px;
            padding: 0.34667rem 0.64rem;
            margin-right: 0.8rem;
            margin-top: 0.8rem;
            color: #333333;
            font-size: 13px;
          }
        }
      }
    }
    .goNum {
      width: 100%;
      height: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .top {
        width: 90%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        .go {
          color: #999999;
          font-size: 13px;
        }
        .num {
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
      }
      .bottom {
        width: 100%;
        height: 40%;

        display: flex;
        p {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          background-image: linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
        }
        .p1 {
          color: #fe4070;
          background-image: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
        }
      }
    }
  }
}
</style>