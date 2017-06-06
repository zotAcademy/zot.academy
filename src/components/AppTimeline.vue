<template>
  <transition-group class="posts" name="slide-fade" tag="div">
    <app-post class="post"
      v-for="(post, index) in posts"
      :key="post.id"
      :post="post"></app-post>
  </transition-group>
</template>

<script>
import AppPost from '@/components/AppPost'

export default {
  name: 'home',
  props: ['posts'],
  components: {
    AppPost
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
