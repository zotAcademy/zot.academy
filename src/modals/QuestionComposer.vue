<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Ask new question</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <app-question-composer></app-question-composer>
    </div>
  </div>
</template>

<script>
import AppQuestionComposer from '@/components/AppQuestionComposer'

export default {
  name: 'question-composer-modal',
  components: {
    AppQuestionComposer
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
