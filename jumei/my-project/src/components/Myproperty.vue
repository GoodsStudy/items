<template>
  <div class="property">
    <div class="propertyTop">
      <p class="TopImg"></p>
      <p class="myproperty">我的资产</p>
    </div>
    <div class="propertyBootom">
      <ul>
        <li>现金券</li>
        <li>红包</li>
        <li>聚美余额</li>
        <li>礼品卡</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.property {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  background: #fff;
  .propertyTop {
    display: flex;
    height: 35px;
    padding-left: 10px;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    .TopImg {
      width: 20px;
      height: 20px;
      background: url(../img/myfund.png);
      background-size: 100% 100%;
    }
    .myproperty {
      margin-left: 15px;
      font-size: 16px;
    }
  }
  .propertyBootom {
    ul {
      display: flex;
      li {
        padding: 10px 0px;
        width: 25%;
        text-align: center;
        color: #666;
        font-size: 15px;
      }
    }
  }
}
</style>