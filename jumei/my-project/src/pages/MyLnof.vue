<template>
  <div class="MyLnof">
    <Mytitle />
    <Myorder />
    <Myproperty />
    <MySale />
    <div class="lxs">
      <p class="lx">客服热线400-123-8888 (8:00-22:00)</p>
      <p class="lx">拨打前请记录您的UID 0</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Mytitle from "../components/Mytitle";
import Myorder from "../components/Myorder";
import Myproperty from "../components/Myproperty";
import MySale from "../components/MySale";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      name: "我的聚美"
    };
  },
  components: {
    Mytitle,
    Myorder,
    Myproperty,
    MySale,
    Footer
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.MyLnof {
  background: #f2f2f2;
  margin-bottom: 50px;
}
.lxs {
  padding: 15px;
  .lx {
    color: #999;
    font-size: 13px;
    line-height: 15px;
  }
}
</style>