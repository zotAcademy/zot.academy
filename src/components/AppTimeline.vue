<template>
  <div>
    <div class="card my-3" v-if="posts == null || posts.length === 0">
      <div class=card-block>
        <h1 class="display-4">{{ title }}</h1>
        <p class="lead">Please stay tuned.</p>
      </div>
    </div>
    <transition-group class="posts" name="slide-fade" tag="div" v-else>
      <app-post class="post"
        v-for="(post, index) in posts"
        :key="post.id"
        :post="post"></app-post>
    </transition-group>
  </div>
</template>

<script>
import AppPost from '@/components/AppPost'

export default {
  name: 'app-timeline',
  props: ['posts'],
  components: {
    AppPost
  },
  computed: {
    title () {
      if (this.$route.name === 'post') {
        return 'No Reply Yet'
      } else {
        return 'No Post Yet'
      }
    }
  }
}
</script>

<style scoped>
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
