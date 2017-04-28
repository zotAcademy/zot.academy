<template>
  <div class="container my-3">
    <app-post
      v-if="post"
      :post="post"
      @remove="$router.back()"></app-post>
  </div>
</template>

<script>
import AppPost from '@/components/AppPost'
import api from '@/api'

export default {
  name: 'post',
  props: ['id'],
  components: {
    AppPost
  },
  beforeRouteUpdate (to, from, next) {
    api.get('/posts/' + to.params.id)
      .then(response => { this.post = response.data })
      .catch(error => { this.error = error.response.data })
    next()
  },
  created () {
    api.get('/posts/' + this.id)
      .then(response => { this.post = response.data })
      .catch(error => { this.error = error.response.data })
  },
  data () {
    return {
      post: null,
      error: null
    }
  }
}
</script>

<style scoped>
</style>
