<template>
  <div class="container my-3">
    <div class="card mb-3">
      <div class="card-header text-center">
        Ask new question
      </div>
      <div class="card-block">
        <app-question-composer></app-question-composer>
      </div>
    </div>
  </div>
</template>

<script>
import AppQuestionComposer from '@/components/AppQuestionComposer'

export default {
  name: 'new-question',
  components: {
    AppQuestionComposer
  }
}
</script>

<style scoped>
</style>
