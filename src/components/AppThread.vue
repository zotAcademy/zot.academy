<template>
  <div>
    <app-post :post="post" v-if="post"></app-post>

    <div :class="{ 'ml-3 ml-md-5': level < 5 }">
      <transition-group class="posts" name="slide-fade" tag="div">
        <app-thread class="post"
          v-for="(post, index) in getPosts(timeline)"
          :key="post.id"
          :post="post"
          :level="level + 1"></app-thread>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppPost from '@/components/AppPost'

export default {
  name: 'AppThread',
  props: {
    post: {},
    level: {
      default: 0
    }
  },
  components: {
    AppPost
  },
  created () {
    this.fetch(this.post.id)
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.fetch(to.params.id)
  },
  computed: {
    ...mapGetters({
      getPosts: 'timelines/getPosts'
    }),
    timeline () {
      return '/posts/' + this.post.id + '/replies/'
    }
  },
  methods: {
    fetch (id) {
      this.$store.dispatch('timelines/get', '/posts/' + id + '/replies/')
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 590px;
}
.posts {
  position: relative;
}
.post {
  transition: all .6s;
}
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-leave-active {
  position: absolute;
  width: 100%;
}
</style>
