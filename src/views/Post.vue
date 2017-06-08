<template>
  <div class="container">
    <app-thread :post="post" v-if="post"></app-thread>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppThread from '@/components/AppThread'

export default {
  name: 'post',
  props: ['id'],
  components: {
    AppThread
  },
  created () {
    this.fetch(this.id)
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.fetch(to.params.id)
  },
  computed: {
    ...mapGetters({
      getPostById: 'posts/getPostById'
    }),
    post () {
      return this.getPostById(this.id)
    }
  },
  methods: {
    fetch (id) {
      this.$store.dispatch('posts/get', id)
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
