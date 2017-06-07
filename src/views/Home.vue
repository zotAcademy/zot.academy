<template>
  <div class="container my-3">
    <div v-if="show || getPosts(timeline).length > 0">
      <app-timeline :posts="getPosts(timeline)"></app-timeline>
    </div>
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
      show: false,
      timeline: '/posts/'
    }
  },
  created () {
    this.$store.dispatch('timelines/get', this.timeline)
      .then(() => { this.show = true })
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
