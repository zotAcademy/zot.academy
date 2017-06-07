<template>
  <div class="container">
    <app-timeline :posts="getPosts(timeline)"></app-timeline>
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
  data () {
    return {
      timeline: '/posts/'
    }
  },
  created () {
    this.$store.dispatch('timelines/get', this.timeline)
      .catch(error => this.$store.commit('error/throw', error))
  },
  computed: {
    ...mapGetters({
      getPosts: 'timelines/getPosts'
    })
  }
}
</script>

<style scoped>
.container {
  max-width: 590px;
}
</style>
