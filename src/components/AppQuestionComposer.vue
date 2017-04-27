<template>
  <form @submit.prevent="post">
    <app-alert v-if="error" class="alert-danger" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="form-group">
      <textarea class="form-control" rows="3" placeholder="What are you wondering?" ref="textarea" v-model="question.text"></textarea>
    </div>
    <button type="submit" class="btn btn-primary float-right" :disabled="disabled">Ask</button>
  </form>
</template>

<script>
import AppAlert from '@/components/AppAlert'
import api from '@/api'

export default {
  name: 'app-compose-question',
  components: {
    AppAlert
  },
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
      this.error = null

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
