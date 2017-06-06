<template>
  <div class="container">
    <app-post
      v-if="post"
      :post="post"
      @remove="$router.push('/')"></app-post>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppPost from '@/components/AppPost'

export default {
  name: 'post',
  props: ['id'],
  components: {
    AppPost
  },
  created () {
    this.$store.dispatch('posts/get', this.id)
      .catch(error => this.$store.commit('error/throw', error))
  },
  computed: {
    ...mapGetters({
      getPostById: 'posts/getPostById'
    }),
    post () {
      return this.getPostById(this.id)
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 590px;
}
</style>
