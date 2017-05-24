<template>
  <div class="container">
    <app-post
      v-if="post"
      :post="post"
      @remove="$router.push('/')"></app-post>
    <transition-group class="posts" name="slide-fade" tag="div" v-if="post">
      <app-post class="post reply ml-3 ml-md-5"
        v-for="(post, index) in post.replies"
        :key="post.id"
        :post="post"
        @remove="post.replies.splice(index, 1)"></app-post>
    </transition-group>
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
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-leave-active {
  position: absolute;
  width: 100%;
}
</style>
