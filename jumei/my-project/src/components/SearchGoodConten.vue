<template>
  <div class="Content">
    <p class="ContentTitle" v-text="this.$store.state.datails[0].title">好难啊</p>
  </div>
</template>>
<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.Content {
  .ContentTitle {
    font-size: 14px;
    margin-left: 4%;
    line-height: 14px;
    margin-top: 10px;
  }
}
</style>