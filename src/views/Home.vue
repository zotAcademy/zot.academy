<template>
  <div class="container">
    <app-post class="my-3"
      v-for="(post, index) in posts"
      :key="post.id"
      :post="post"
      @remove="posts.splice(index, 1)"></app-post>
    </div>
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
</style>
