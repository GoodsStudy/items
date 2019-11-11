<template>
  <div class="footer">
    <input v-model="pass" class="pass" type="password" placeholder="6-16位登录密码" />
    <input @click="reg" class="reg" type="button" value="注册" />
    <p>
      点击注册，表示同意
      <a href="http://i.jumei.com/m/account/protocol">《聚美优品用户协议》</a>
    </p>
  </div>
</template>

<script>
import { Dialog } from "vant";
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      pass: ""
    };
  },
  watch: {
    pass() {
      this.$store.state.pass = this.pass;
    }
  },
  methods: {
    reg() {
      let name = this.$store.state.name;
      let pass = this.$store.state.pass;
      let yzm = this.$store.state.yzm;

      //手机正则
      let reg = /^1[3-9]\d{9}$/;
      let isok = reg.test(name);

      //密码正则
      let reg2 = /^[a-zA-Z0-9-\S]{6,16}$/;
      let isok2 = reg2.test(pass);

      if (name && isok) {
        if (pass && isok2) {
          if (yzm) {
            this.ax(name, pass);
          } else {
            Dialog({ message: " 短信验证码输入错误，请重新输入 " });
          }
        } else {
          Dialog({ message: "密码格式不正确，请重新输入" });
        }
      } else {
        Dialog({ message: "请输入正确的手机号码" });
      }
    },
    ax(name, pass) {
      axios
        .post("http://localhost:3000/reg", qs.stringify({ name, pass }))
        .then(({ data }) => {
          if (data == true) {
            Dialog({ message: " 注册成功 " });
            this.$store.state.yzm = "";
            this.$router.push({ path: "/login" });
          } else {
            Dialog({ message: " 账号已注册 " });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 18px;
  .pass {
    background: #f5f5f5;
    border-radius: 20px;
    width: 100%;
    height: 36px;
    font-size: 14px;
    color: #999999;
    text-align: left;
    text-indent: 21px;
    border: none;
  }
  .reg {
    background: #feb2c5 !important;
    border-radius: 20px;
    width: 100%;
    height: 36px;
    font-size: 14px;
    color: #ffffff;
    line-height: 14px;
    text-align: center;
    margin: 18px auto 0 auto;
    border: none;
  }
  p {
    margin: auto;
    font-size: 12px;
    color: #999999;
    height: 36px;
    line-height: 36px;
    a {
      color: #808080;
      text-decoration: none !important;
    }
  }
}
</style>