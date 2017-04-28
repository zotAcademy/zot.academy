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
import AppPost from '@/components/AppPost'
import api from '@/api'

export default {
  name: 'home',
  components: {
    AppPost
  },
  created () {
    api.get('/posts/')
      .then(response => { this.posts = response.data })
      .catch(error => this.$store.commit('error/throw', error))
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>

<style scoped>
.posts {
  position: relative;
}
.post {
  transition: all 1s;
}
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-leave-active {
  position: absolute;
  width: 100%;
}
</style>
