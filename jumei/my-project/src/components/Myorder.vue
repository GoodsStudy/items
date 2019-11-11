<template>
  <div class="order">
    <div class="orderTop">
      <p class="orderLetf">
        <span class="img"></span>
        <span class="dd">我的订单</span>
      </p>
      <p class="orderRight">查看我的全部订单 ></p>
    </div>
    <div class="orderBootom">
      <ul>
        <li>
          <p class="goods-img"></p>
          <p class="goods-titel">待付款</p>
        </li>
        <li>
          <p class="goods-img img2"></p>
          <p class="goods-titel">待收货</p>
        </li>
        <li>
          <p class="goods-img img3"></p>
          <p class="goods-titel">待评价</p>
        </li>
        <li>
          <p class="goods-img img4"></p>
          <p class="goods-titel">退货/退款</p>
        </li>
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
.order {
  background: #fff;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .orderTop {
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    .orderLetf {
      padding-left: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      .img {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(../img/myorder.png);
        background-size: 100% 100%;
      }
      .dd {
        margin-left: 15px;
        display: inline-block;
        height: 20px;
        line-height: 15px;
        display: flex;
        align-items: flex-end;
      }
    }
    .orderRight {
      color: #999;
      font-size: 14px;
      padding-right: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
    }
  }
  .orderBootom {
    ul {
      display: flex;
      li {
        width: 25%;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .goods-img {
          width: 28px;
          height: 28px;
          background: url(../img/unpaid.png);
          background-size: 100% 100%;
          font-size: 20px;
        }
        .goods-titel {
          font-size: 16px;
          color: #666;
        }
        .img2 {
          background: url(../img/unconfirm.png);
          background-size: 100% 100%;
        }
        .img3 {
          background: url(../img/uncomment.png);
          background-size: 100% 100%;
        }
        .img4 {
          background: url(../img/refund.png);
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>