<template>
  <div class="container">
    <div class="card my-3">
      <div class="card-header text-center">
        Compose new Post
      </div>
      <div class="card-block">
        <app-post-composer></app-post-composer>
      </div>
    </div>
  </div>
</template>

<script>
import AppPostComposer from '@/components/AppPostComposer'

export default {
  name: 'new-post',
  components: {
    AppPostComposer
  }
}
</script>

<style scoped>
</style>
