<template>
  <div class="container">
    <app-signin></app-signin>
  </div>
</template>

<script>
import AppSignin from '@/components/AppSignin'

export default {
  name: 'signin',
  components: {
    AppSignin
  }
}
</script>

<style scoped>
.container {
  max-width: 430px;
}
</style>
