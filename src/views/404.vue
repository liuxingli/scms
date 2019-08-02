<template>
  <div class="missingpage-container">
    <div class="missingpage-text">{{ message }}</div>
    <div class="missingpage-text">{{ Operation }}</div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return this.$t('missingpage.message')
    },

    Operation() {
      return this.$t('missingpage.operation')
    }
  }
}
</script>

<style lang="scss" scoped>
.missingpage {
  &-container {
    margin: 30px;
    width: 60%;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    margin: 30px;
  }
}
</style>
