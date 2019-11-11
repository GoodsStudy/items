<template>
  <div class="divider">
    <van-divider
      :style="{ width:'200px' ,color: '#333', borderColor: '#999', padding: '0 16px' }"
    >新品上市</van-divider>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
export default {};
</script>
<style lang="scss" scoped>
.divider {
  display: flex;
  justify-content: center;
}
</style>
