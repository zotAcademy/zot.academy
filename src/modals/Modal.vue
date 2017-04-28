<template>
  <div v-if="component">
    <div class="modal show">
      <div class="modal-dialog" role="document">
        <component :is="component"></component>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
import PostComposerModal from '@/modals/PostComposer'

export default {
  name: 'modal',
  components: {
    PostComposerModal
  },
  watch: {
    '$route' () {
      this.$store.commit('modal/hide')
    }
  },
  computed: {
    component () {
      return this.$store.state.modal.component
    }
  }
}
</script>

<style scoped>
.modal.show {
  display: block;
}
</style>
