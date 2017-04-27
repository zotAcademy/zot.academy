<template>
  <div class="container my-3">
    <app-question
      v-if="question"
      :question="question"
      @remove="$router.back()"></app-question>
  </div>
</template>

<script>
import AppQuestion from '@/components/AppQuestion'
import api from '@/api'

export default {
  name: 'question',
  props: ['id'],
  components: {
    AppQuestion
  },
  beforeRouteUpdate (to, from, next) {
    api.get('/questions/' + to.params.id)
      .then(response => { this.question = response.data })
      .catch(error => { this.error = error.response.data })
    next()
  },
  created () {
    api.get('/questions/' + this.id)
      .then(response => { this.question = response.data })
      .catch(error => { this.error = error.response.data })
  },
  data () {
    return {
      question: null,
      error: null
    }
  }
}
</script>

<style scoped>
</style>
