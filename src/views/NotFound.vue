<template>
</template>

<script>
import AppError from '@/components/AppError'

export default {
  name: 'not-found',
  beforeCreate () {
    this.$store.commit('error/throw', {
      response: {
        status: 404
      }
    })
  },
  components: {
    AppError
  }
}
</script>
