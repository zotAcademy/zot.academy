<template>
</template>

<script>
export default {
  name: 'logout',
  beforeCreate () {
    var self = this
    this.$store.dispatch('session/logout')
      .then(function () {
        self.$router.push('/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
