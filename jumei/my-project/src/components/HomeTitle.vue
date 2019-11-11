<template>
  <van-tabs class="botton" v-model="activeName" @my-event="scroll(isFixed)">
    <van-tab color="red" title="今日10点上线" name="a">
      <TitleImg />
      <HomeMarketing />
    </van-tab>
    <van-tab color="red" title="明日10点预告" name="b">
      <TitleImg />
      <HomeMarketing />
    </van-tab>
  </van-tabs>
</template>
<script>
import TitleImg from "./TitleImg";
import HomeMarketing from "./HomeMarketing";

export default {
  data() {
    return {
      activeName: "a"
    };
  },
  methods: {},
  components: {
    TitleImg,
    HomeMarketing
  }
};
</script>


<style lang="scss" scoped>
.botton {
  background: #f5f5f5;
  margin-bottom: 50px;
}
</style>