<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
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
import AppPostComposer from '@/components/AppPostComposer'

export default {
  name: 'post-composer-modal',
  components: {
    AppPostComposer
  },
  computed: {
    title () {
      return this.$store.state.modal.payload ? 'Edit this Post' : 'Compose new Post'
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
