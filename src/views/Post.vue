<template>
  <div class="container">
    <app-post
      v-if="post"
      :post="post"
      @remove="$router.push('/')"></app-post>

    <div class="ml-5" v-if="show || getPosts(timeline).length > 0">
      <app-timeline :posts="getPosts(timeline)"></app-timeline>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppPost from '@/components/AppPost'
import AppTimeline from '@/components/AppTimeline'

export default {
  name: 'post',
  props: ['id'],
  components: {
    AppPost,
    AppTimeline
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    this.fetch(this.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.show = false
    next()
    this.fetch(to.params.id)
  },
  computed: {
    ...mapGetters({
      getPostById: 'posts/getPostById',
      getPosts: 'timelines/getPosts'
    }),
    post () {
      return this.getPostById(this.id)
    },
    timeline () {
      return '/posts/' + this.id + '/replies/'
    }
  },
  methods: {
    fetch (id) {
      this.$store.dispatch('posts/get', id)
        .catch(error => this.$store.commit('error/throw', error))
      this.$store.dispatch('timelines/get', '/posts/' + id + '/replies/')
        .then(() => { this.show = true })
        .catch(error => this.$store.commit('error/throw', error))
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 590px;
}
</style>
