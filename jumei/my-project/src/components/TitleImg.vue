<template>
  <div>
    <img v-for="(img,index) in imageList" :key="index" v-lazy="img" />
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
export default {
  data() {
    return {
      imageList: [
        "http://mp5.jmstatic.com//jmstore/image/000/006/6722_std/5db9a24bcb4f3_2048_710.jpg?1572542695&imageView2/2/w/800/q/90",
        "http://mp5.jmstatic.com//jmstore/image/000/007/7718_std/5dae97d43ddc2_2048_710.jpg?1571984804&imageView2/2/w/800/q/90",
        "http://mp5.jmstatic.com//jmstore/image/000/000/733_std/5db2ad1135dda_2048_710.jpg?1571999863&imageView2/2/w/800/q/90",
        "http://mp5.jmstatic.com//jmstore/image/000/007/7929_std/5db93e01c8f3c_2048_710.jpg?1572577597&imageView2/2/w/800/q/90",
        "http://mp6.jmstatic.com//jmstore/image/000/008/8126_std/5da81e9386f1a_2048_710.jpg?1572414855&imageView2/2/w/800/q/90"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 130px;
}
</style>