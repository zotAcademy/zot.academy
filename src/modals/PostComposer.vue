<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">{{ title }}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <app-post-composer></app-post-composer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppPostComposer from '@/components/AppPostComposer'

export default {
  name: 'post-composer-modal',
  components: {
    AppPostComposer
  },
  computed: {
    ...mapGetters({
      getPostById: 'posts/getPostById'
    }),
    title () {
      if (this.$store.state.modal.payload) {
        if (this.$store.state.modal.payload.in_reply_to_post_id && this.$store.state.modal.payload.id == null) {
          return 'Reply to @' + this.getPostById(this.$store.state.modal.payload.in_reply_to_post_id).user.username
        }
        return 'Edit this Post'
      }
      return 'Compose new Post'
    }
  },
  methods: {
    close () {
      this.$store.commit('modal/hide')
    }
  }
}
</script>

<style scoped>
</style>
