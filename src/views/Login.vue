<template>
  <div class="container">
    <app-login></app-login>
  </div>
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
