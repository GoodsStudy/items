<template>
  <ul>
    <li>
      <img src="http://p0.jmstatic.com/product/004/655/4655300_std/4655300_350_350.jpg" alt />
      <p class="p1">Lee 秋冬经典 男士卫衣L29535AF46RP</p>
      <p class="p2">
        <span>￥399</span>
      </p>
    </li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 48%;
    height: 16.25rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 10rem;
      height: 10rem;
      display: inline-block;
    }
    .p1 {
      font-size: 16px;
      line-height: 18px;
      height: 36px;
      padding: 0 0.5625rem;
      color: #333;
      word-break: break-all;
      word-wrap: break-word;
      overflow: hidden;
      text-align: left;
    }
    .p2 {
      color: #fe4070;
    }
  }
}
</style>