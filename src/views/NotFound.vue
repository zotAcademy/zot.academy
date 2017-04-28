<template>
</template>

<script>
export default {
  name: 'not-found',
  beforeCreate () {
    this.$store.commit('error/throw', {
      response: {
        status: 404
      }
    })
  }
}
</script>
