<template>
  <div class="login-all">
    <input v-model="el" class="login-elg" type="text" placeholder="请输入11位手机号" />
    <label>
      <input v-model="yzm" class="login-note" type="text" placeholder="请输入短信验证码" />
      <p @click="verify" v-if="show" class="login-verify">验证</p>
      <p v-if="!show" class="login-verify">{{t}} 秒</p>
    </label>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
export default {
  data() {
    return {
      show: true,
      el: "",
      yzm: "",
      t: 90
    };
  },

  watch: {
    el() {
      this.$store.state.name = this.el;
    },
    yzm() {
      this.$store.state.yzm = this.yzm;
    }
  },
  methods: {
    verify() {
      this.show = false;
      let _this = this;
      let h = _this.t;
      let res = setInterval(() => {
        h--;
        _this.t = h;
        if (h == 0) {
          _this.t = 90;
          _this.show = true;
          clearInterval(res);
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.log-el {
  width: 200px;
  margin: 20px auto;
}
.login-all {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-elg {
    background: #f5f5f5;
    border-radius: 20px;
    width: 80%;
    height: 30px;
    font-size: 14px;
    color: #999;
    text-indent: 21px;
    border: none;
  }
  label {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    .login-note {
      background: #f5f5f5;
      border-radius: 20px;
      width: 65%;
      height: 36px;
      font-size: 14px;
      color: #999;
      text-align: left;
      text-indent: 21px;
      margin-top: 18px;
      border: none;
    }
    .login-verify {
      background: #ffffff;
      border: 1px solid #feb2c5;
      border-radius: 20px;
      width: 30%;
      height: 35px;
      font-size: 14px;
      color: #feb2c5;
      line-height: 35px;
      text-align: center;
      margin-top: 18px;
    }
  }
}
</style>