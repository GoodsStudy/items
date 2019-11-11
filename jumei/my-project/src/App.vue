<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default {
  name: "app",
  components: {}
};
</script>
<style lang="scss" >
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>

