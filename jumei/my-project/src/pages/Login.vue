<template>
  <div>
    <LoginTitle />
    <LoginState />
    <LoginNews />
    <LoginBtn />
  </div>
</template>

<script>
import LoginTitle from "../components/LoginTitle";
import LoginNews from "../components/LoginNews";
import LoginBtn from "../components/LoginBtn";
import LoginState from "../components/LoginState";
export default {
  components: {
    LoginTitle,
    LoginNews,
    LoginBtn,
    LoginState
  }
};
</script>