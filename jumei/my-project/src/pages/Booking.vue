<template>
  <div>
    <NavBarTwo />
    <GoodTwo />
    <Footer />
  </div>
</template>

<script>
import NavBarTwo from "../components/NavBarTwo";
import GoodTwo from "../components/GoodTwo";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBarTwo,
    GoodTwo,
    Footer
  }
};
</script>