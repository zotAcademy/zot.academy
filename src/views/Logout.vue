<template>
</template>

<script>
export default {
  name: 'logout',
  beforeCreate () {
    this.$store.dispatch('session/logout')
      .then(() => this.$router.push('/'))
      .catch(() => {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
