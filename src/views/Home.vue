<template>
  <div class="container">
    <transition-group class="posts" name="slide-fade" tag="div">
      <app-post class="post"
        v-for="(post, index) in posts"
        :key="post.id"
        :post="post"
        @remove="posts.splice(index, 1)"></app-post>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppPost from '@/components/AppPost'

export default {
  name: 'home',
  components: {
    AppPost
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
