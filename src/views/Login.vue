<template>
  <app-login></app-login>
</template>

<script>
import AppLogin from '@/components/AppLogin'

export default {
  name: 'login',
  components: {
    AppLogin
  }
}
</script>

<style scoped>
.container {
  max-width: 430px;
}
</style>
