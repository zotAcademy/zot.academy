<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
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
