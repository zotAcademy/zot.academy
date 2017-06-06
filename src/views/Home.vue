<template>
  <div class="container">
    <app-timeline :posts="posts"></app-timeline>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppTimeline from '@/components/AppTimeline'

export default {
  name: 'home',
  components: {
    AppTimeline
  },
  created () {
    this.$store.dispatch('posts/get')
      .catch(error => this.$store.commit('error/throw', error))
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  }
}
</script>

<style scoped>
.container {
  max-width: 590px;
}
</style>
