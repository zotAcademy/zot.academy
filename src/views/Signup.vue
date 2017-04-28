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

<style scoped>
.container {
  max-width: 430px;
}
</style>
