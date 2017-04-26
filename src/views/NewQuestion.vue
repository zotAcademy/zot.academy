<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="card mb-3">
      <div class="card-header text-center">
        Ask new question
      </div>
      <div class="card-block">
        <form @submit.prevent="post">
          <div class="form-group">
            <textarea class="form-control" rows="3" placeholder="What are you wondering?" v-model="question.text"></textarea>
          </div>
          <button type="submit" class="btn btn-primary float-right" :disabled="disabled">Ask</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'app-new-question',
  data () {
    return {
      question: {
        text: ''
      },
      disabled: false,
      error: null
    }
  },
  beforeCreate () {
    if (!this.$store.state.session.isAuthenticated) {
      this.$router.push('/login')
    }
  },
  methods: {
    post () {
      if (this.disabled) return
      this.disabled = true

      var self = this
      api.post('/questions/', this.question)
        .then(function (data) {
          self.$router.push('/questions/' + data.id)
        })
        .catch(function (error) {
          self.error = error.response.data
          self.disabled = false
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  resize: none;
}
.error-message {
  white-space: pre-wrap;
}
.container {
  max-width: 36.875rem;
}
</style>
