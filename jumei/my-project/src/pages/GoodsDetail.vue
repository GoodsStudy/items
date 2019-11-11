<template>
  <div class="gooddata">
    <SearchGoodTitle />
    <div class="djs">
      还剩
      <SearchGoodDjs />
    </div>
    <SearchGoodConten />
    <SearchGoodCollapse />
    <SearchGoodFooter />

    <div class="toGood" v-if="this.$store.state.goodStart">
      <GoodsDetailTo />
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const qs = require("qs");
import SearchGoodTitle from "../components/SearchGoodTitle";
import SearchGoodFooter from "../components/SearchGoodFooter";
import SearchGoodConten from "../components/SearchGoodConten";
import SearchGoodDjs from "../components/SearchGoodDjs";
import SearchGoodCollapse from "../components/SearchGoodCollapse";
import GoodsDetailTo from "../components/GoodsDetailTo";
export default {
  components: {
    SearchGoodTitle,
    SearchGoodFooter,
    SearchGoodConten,
    SearchGoodDjs,
    SearchGoodCollapse,
    GoodsDetailTo
  },
  async created() {
    let id = window.location.href.split("?")[1];
    await axios
      .post(
        "http://localhost:3000/datalis",
        qs.stringify({
          id
        })
      )
      .then(({ data }) => {
        this.$store.state.datails = data;
        this.$store.state.goodname = data[0].medium_name;
      })
      .catch(function(error) {
        window.console.log(error);
      });

    await this.type();
  },
  methods: {
    type() {
      let id = window.location.href.split("?")[1];
      let type = this.$store.state.datails[0].type;

      axios
        .post("http://localhost:3000/togood", qs.stringify({ id, type }))
        .then(str => {
          this.$store.state.initImg = str.data.data.result.size[0].img;
          this.$store.state.size = str.data.data.result.size;
          this.$store.state.size_attr = str.data.data.result.size_attr;
        });
    }
  },
  destroyed() {
    //销毁初始化数据
    this.$store.state.datails = [
      {
        medium_name: "",
        title: ""
      }
    ];
    this.$store.state.initImg = [];
    this.$store.state.typeify = "类型";
    this.$store.state.model = "型号 ";
    this.$store.state.num = 1;
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.gooddata {
  background: #fff;
  .djs {
    background: #fff;
    display: flex;
    margin-left: 4%;
    margin-top: 5px;
    align-items: center;
  }
  .toGood {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 200;
  }
}
</style>