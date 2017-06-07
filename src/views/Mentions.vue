<template>
  <div class="container my-3">
    <h1>Mentions</h1>
    <app-timeline :posts="getPosts(timeline)"></app-timeline>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppTimeline from '@/components/AppTimeline'

export default {
  name: 'mentions',
  components: {
    AppTimeline
  },
  created () {
    this.$store.dispatch('timelines/get', this.timeline)
      .catch(error => this.$store.commit('error/throw', error))
  },
  computed: {
    ...mapGetters({
      sessionUsername: 'session/username',
      getPosts: 'timelines/getPosts'
    }),
    timeline () {
      return '/users/' + this.sessionUsername + '/mentions/'
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 590px;
}
</style>
