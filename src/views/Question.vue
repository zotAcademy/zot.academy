<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="card mb-3" v-if="question">
      <div class="card-header">
        @{{ question.user.username }} asked {{ question.createdAt | fromNow }}
      </div>
      <div class="card-block">
        {{ question.text }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import api from '@/api'

export default {
  name: 'question',
  props: ['id'],
  beforeRouteEnter (to, from, next) {
    api.get('/questions/' + to.params.id)
      .then(response => next(vm => vm.setData(response.data)))
      .catch(error => next(vm => vm.setError(error)))
  },
  data () {
    return {
      question: null,
      error: null
    }
  },
  filters: {
    fromNow: date => moment(date).fromNow()
  },
  methods: {
    setData (data) {
      this.question = data
    },
    setError (error) {
      this.error = error.response.data
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
  max-width: 36.875rem;
}
</style>
