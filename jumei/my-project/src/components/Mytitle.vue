<template>
  <div class="my">
    <div class="myTitle">
      <p class="iconfont p1">&#xe612;</p>
      <p class="p2">我的聚美</p>
      <p class="iconfont p3">&#xe627;</p>
    </div>

    <div v-show="this.$store.state.start">
      <div class="portrait">
        <img src="../img/noportrait.png" alt />
      </div>
      <div class="mylog">
        <router-link to="/reg">
          <p class="myleft">注册</p>
        </router-link>
        <p class="conter">|</p>
        <router-link to="/login">
          <p class="myright">登录</p>
        </router-link>
      </div>
    </div>
    <div class="myLogin" v-show="!this.$store.state.start">
      <img src="../img/green_200_200.png" alt />
      <div class="loginLeft">
        <p class="p1" v-text="name"></p>
        <p class="p2">
          <span>普通会员</span>
        </p>
      </div>
      <div class="loginReight">
        <ul>
          <li>
            <i class="iconfont">&#xe64c;</i>
            <span>心愿单</span>
          </li>
          <li>
            <i class="iconfont">&#xe6af;</i>
            <span>开售提醒</span>
          </li>
          <li>
            <i class="iconfont">&#xe60f;</i>
            <span>收藏</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      start: this.$store.state.start,
      name: ""
    };
  },
  methods: {
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
    }
  },
  created() {
    if (this.getcookie("jmId")) {
      this.name = this.getcookie("jmId");
      this.start = false;
    } else {
      this.start = true;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.my {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fd5079;
  .myTitle {
    height: 45px;
    width: 90%;
    background: #fd5079;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 45px;
    .p1,
    .p3 {
      height: 45px;
      color: #fff;
      font-size: 30px;
    }
    .p1 {
      font-size: 25px;
    }
    .p2 {
      color: #fff;
    }
  }

  .van-hairline--bottom::after {
    border-bottom-width: 0px;
  }
  .mytitle {
    background: #fd5079;
    border-bottom: none;
  }
  .van-nav-bar__text,
  .van-nav-bar__title,
  .van-icon {
    color: #fff;
    line-height: 38px;
  }
  .portrait {
    padding-top: 10px;
    height: 70px;
    width: 100%;
    background: #fd5079;
    display: flex;
    justify-content: center;
    img {
      width: 70px;
      height: 70px;
    }
  }
  .mylog {
    background: #fd5079;
    color: #fff;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    .myleft,
    .myright,
    .conter {
      color: #fff;
      line-height: 25px;
      font-size: 18px;
    }
    .myleft,
    .myright {
      width: 100px;
      text-align: center;
      font-weight: 900;
    }
  }
  .myLogin {
    margin-top: 30px;
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    position: relative;
    img {
      width: 78px;
      height: 78px;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 32px;
    }
    .loginLeft {
      width: 100%;
      height: 50%;
      background: #fd5079;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .p1 {
        width: 30%;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
      }
      .p2 {
        width: 30%;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
        span {
          display: inline-block;
          padding: 3px 5px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 100px;
        }
      }
    }
    .loginReight {
      width: 100%;
      height: 50%;
      background: #fff;
      display: flex;
      justify-content: flex-end;
      ul {
        border-bottom: 1px solid #fff;
        width: 70%;
        height: 100%;
        display: flex;
        li {
          width: 33%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #666;
          i {
            font-size: 24px;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
