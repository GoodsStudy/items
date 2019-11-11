<template>
  <div class="SearchGoodFooter">
    <p class="dp">
      <i class="iconfont">&#xe619;</i>
      <samp>店铺</samp>
    </p>
    <p class="gwc">
      <i class="iconfont">&#xe657;</i>
      <samp>购物车</samp>
    </p>
    <p class="jr">加入购物车</p>
    <p class="lj">立即购买</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.SearchGoodFooter {
  position: fixed;
  height: 50px;
  width: 100%;
  align-items: center;
  bottom: 0;
  display: flex;
  z-index: 10;
  .dp {
    color: #979797;
    line-height: 10px;
    flex: 1;
    font-size: 12px;
    border-right: 1px solid #eee;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    justify-content: space-around;
    i {
      font-size: 26px;
    }
  }
  .gwc {
    color: #979797;
    background: #fff;
    line-height: 10px;
    font-size: 12px;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    i {
      font-size: 26px;
    }
  }
  .jr {
    flex: 2;
    height: 100%;
    background: #ffd8e5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fe4070;
  }
  .lj {
    height: 100%;
    flex: 2;
    background: #fe4579;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
}
</style>