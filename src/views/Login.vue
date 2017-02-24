<template>
  <app-login></app-login>
</template>

<script>
import AppLogin from '@/components/AppLogin'

export default {
  name: 'login',
  components: {
    AppLogin
  },
  created () {
    if (this.$store.state.session.isAuthenticated) {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 26.25rem;
}
</style>
