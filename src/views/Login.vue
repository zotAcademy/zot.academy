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
  beforeCreate () {
    var self = this
    if (this.$store.state.session.isAuthenticated) {
      this.$store.dispatch('redirection/pop').then(function (path) {
        self.$router.push(path)
      }).catch(function () {
        self.$router.push('/')
      })
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
