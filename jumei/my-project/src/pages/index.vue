<template>
  <div id="app">
    <HomeHeader />
    <HomeNavBar />
    <HomeTitle />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HomeHeader from "../components/HomeHeader";
import HomeNavBar from "../components/HomeNavBar.vue";
import HomeTitle from "../components/HomeTitle.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "app",
  components: {
    HomeHeader,
    HomeNavBar,
    HomeTitle,
    Footer
  }
};
</script>

