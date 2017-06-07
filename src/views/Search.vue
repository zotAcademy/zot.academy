<template>
  <div class="container my-3">
    <div class="card my-3" v-if="timeline == null">
      <div class=card-block>
        <h1 class="display-4"></h1>
        <p class="lead">Only search via <router-link to="/search?q=%23hashtag">#hashtag</router-link> is supported at this moment. <br><br> Full text search will come at a later time.</p>
      </div>
    </div>
    <div v-else-if="show">
      <h1>{{ query }}</h1>
      <app-timeline :posts="getPosts(timeline)"></app-timeline>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppTimeline from '@/components/AppTimeline'

export default {
  name: 'search',
  components: {
    AppTimeline
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    this.search()
  },
  beforeRouteUpdate (to, from, next) {
    this.show = false
    next()
    this.search()
  },
  computed: {
    ...mapGetters({
      getPosts: 'timelines/getPosts'
    }),
    query () {
      return this.$route.query.q
    },
    timeline () {
      if (/^#/.test(this.query)) {
        return '/hashtags/' + this.query.replace(/^#/, '') + '/posts/'
      } else {
        return null
      }
    }
  },
  methods: {
    search () {
      if (this.timeline) {
        this.$store.dispatch('timelines/get', this.timeline)
          .then(() => { this.show = true })
          .catch(() => { this.show = true })
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 590px;
}
</style>
