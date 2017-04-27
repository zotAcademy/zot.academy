<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <app-question
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
