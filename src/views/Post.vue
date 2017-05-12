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
  beforeMount () {
    this.fetch()
  },
  beforeUpdate () {
    this.fetch()
  },
  data () {
    return {
      post: null
    }
  },
  methods: {
    fetch () {
      api.get('/posts/' + this.id)
        .then(response => { this.post = response.data })
        .catch(error => this.$store.commit('error/throw', error))
    }
  }
}
</script>

<style scoped>
</style>
