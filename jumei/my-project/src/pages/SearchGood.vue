<template>
  <div class="searchGood">
    <index />
    <div class="searchTwo">
      <div class="searchLeft" @click="searchsLeft"></div>
      <div class="searchRight">
        <div class="tt">
          <SearchTitleTwo />
        </div>
        <div class="title">
          <SearchClass />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import index from "./index";
import SearchTitleTwo from "../components/SearchTitleTwo";
import SearchClass from "../components/SearchClass";
export default {
  methods: {
    searchsLeft() {
      this.$router.push({ path: "/" });
    }
  },
  components: {
    index,
    SearchTitleTwo,
    SearchClass
  }
};
</script>

<style lang="scss" scoped>
.searchGood {
  .searchTwo {
    width: 100%;
    top: 0;
    right: 0;
    position: absolute;
    height: 100%;
    z-index: 100;
    display: flex;
    .searchLeft {
      position: fixed;
      left: 0;
      width: 15%;
      background: #000;
      opacity: 0.5;
      height: 100%;
      z-index: 100;
    }
    .searchRight {
      position: fixed;
      right: 0;
      width: 85%;
      height: 100%;
      background: #fff;
      overflow: auto;
      z-index: 100;
      .tt {
        width: 85%;
        position: fixed;
        z-index: 101;
      }
      .title {
        margin-top: 46px;
        height: auto;
      }
    }
  }
}
</style>