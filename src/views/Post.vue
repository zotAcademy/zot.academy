<template>
  <div class="container">
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
      .catch(error => this.$store.commit('error/throw', error))
    next()
  },
  created () {
    api.get('/posts/' + this.id)
      .then(response => { this.post = response.data })
      .catch(error => this.$store.commit('error/throw', error))
  },
  data () {
    return {
      post: null
    }
  }
}
</script>

<style scoped>
</style>
