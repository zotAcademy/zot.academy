<template>
  <div class="container">
    <div class="card my-3">
      <div class="card-header text-center">
        {{ title }}
      </div>
      <div class="card-block">
        <app-post-composer></app-post-composer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppPost from '@/components/AppPost'
import AppPostComposer from '@/components/AppPostComposer'

export default {
  name: 'reply-post',
  props: ['id'],
  components: {
    AppPost,
    AppPostComposer
  },
  computed: {
    ...mapGetters({
      getPostById: 'posts/getPostById'
    }),
    post () {
      return this.getPostById(this.id)
    },
    title () {
      if (this.post != null) {
        return 'Reply to @' + this.post.user.username
      }
      return 'Reply'
    }
  }
}
</script>

<style scoped>
</style>
