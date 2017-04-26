<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="card mb-3">
      <div class="card-block">
        <h4 class="card-title">Ask New Question</h4>
          <form @submit.prevent="post">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="What are you wondering?" v-model="question.text">
            </div>
            <button class="btn btn-block btn-primary">Ask</button>
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
      var self = this
      api.post('/questions/', this.question)
        .then(function (data) {
          self.$router.push('/questions/' + data.id)
        })
        .catch(function (error) {
          self.error = error.response.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-message {
  white-space: pre-wrap;
}
.container {
  max-width: 26.25rem;
}
</style>
