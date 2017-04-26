<template>
  <app-signup></app-signup>
</template>

<script>
import AppSignup from '@/components/AppSignup'

export default {
  name: 'signup',
  components: {
    AppSignup
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 26.25rem;
}
</style>
