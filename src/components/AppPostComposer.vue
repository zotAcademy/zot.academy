<template>
  <form @submit.prevent="submit">
    <app-alert v-if="error" class="alert-danger" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="form-group">
      <textarea class="form-control" rows="3" placeholder="What are you wondering?" ref="textarea" v-model="post.text"></textarea>
    </div>
    <button type="submit" class="btn btn-primary float-right" :disabled="disabled">Post</button>
  </form>
</template>

<script>
import AppAlert from '@/components/AppAlert'
import api from '@/api'

export default {
  name: 'app-compose-post',
  components: {
    AppAlert
  },
  data () {
    return {
      post: {
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
    submit () {
      if (this.disabled) return
      this.disabled = true
      this.error = null

      api.post('/posts/', this.post)
        .then(response => this.$router.push('/posts/' + response.data.id))
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
