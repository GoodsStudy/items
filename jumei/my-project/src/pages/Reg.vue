<template>
  <div>
    <RegTitle />
    <RegState />
    <LoginNews />
    <RegFooter />
  </div>
</template>

<script>
import RegTitle from "../components/RegTitle";
import RegState from "../components/RegState";
import LoginNews from "../components/LoginNews";
import RegFooter from "../components/RegFooter";
export default {
  components: {
    RegTitle,
    RegState,
    LoginNews,
    RegFooter
  }
};
</script>