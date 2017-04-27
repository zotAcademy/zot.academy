<template>
  <div class="container">
    <app-question class="my-3"
      v-for="(question, index) in questions"
      :key="question.id"
      :question="question"
      @remove="questions.splice(index, 1)"></app-question>
    </div>
  </div>
</template>

<script>
import AppQuestion from '@/components/AppQuestion'
import api from '@/api'

export default {
  name: 'home',
  components: {
    AppQuestion
  },
  created () {
    api.get('/questions/')
      .then(response => { this.questions = response.data })
      .catch(error => { this.error = error.response.data })
  },
  data () {
    return {
      questions: [],
      error: null
    }
  }
}
</script>

<style scoped>
</style>
