<template>
  <div class="container my-3">
    <h3>{{ query }}</h3>
  </div>
</template>

<script>
export default {
  name: 'search',
  components: {
  },
  created () {
  },
  computed: {
    query () {
      return this.$route.query.q
    }
  }
}
</script>

<style scoped>
</style>
