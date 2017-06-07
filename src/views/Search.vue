<template>
  <div class="container my-3">
    <form class="my-3 hidden-lg-up" @submit.prevent="$router.push({path: '/search', query: {q: query}})">
      <input class="form-control" type="text" placeholder="Search" v-model="query">
    </form>

    <div class="card my-3" v-if="timeline == null && (query != null && query !== '')">
      <div class=card-block>
        <p class="lead">Only search via <router-link to="/search?q=%23hashtag">#hashtag</router-link> is supported at this moment. <br><br> Full text search will come at a later time.</p>
      </div>
    </div>
    <div v-else-if="show">
      <h1 class="hidden-md-down">{{ query }}</h1>
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
      query: '',
      show: false
    }
  },
  created () {
    this.query = this.$route.query.q
    this.search()
  },
  beforeRouteUpdate (to, from, next) {
    this.show = false
    next()
    this.query = this.$route.query.q
    this.search()
  },
  computed: {
    ...mapGetters({
      getPosts: 'timelines/getPosts'
    }),
    timeline () {
      if (/^#./.test(this.$route.query.q)) {
        return '/hashtags/' + this.$route.query.q.replace(/^#/, '') + '/posts/'
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
