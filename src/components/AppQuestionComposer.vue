<template>
  <form @submit.prevent="post">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="form-group">
      <textarea class="form-control" rows="3" placeholder="What are you wondering?" ref="textarea" v-model="question.text"></textarea>
    </div>
    <button type="submit" class="btn btn-primary float-right" :disabled="disabled">Ask</button>
  </form>
</template>

<script>
import api from '@/api'

export default {
  name: 'app-compose-question',
  data () {
    return {
      question: {
        text: ''
      },
      disabled: false,
      error: null
    }
  },
  mounted () {
    this.$refs.textarea.focus()
  },
  methods: {
    post () {
      if (this.disabled) return
      this.disabled = true

      api.post('/questions/', this.question)
        .then(response => this.$router.push('/questions/' + response.data.id))
        .catch(error => {
          this.error = error.response.data
          this.disabled = false
        })
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
