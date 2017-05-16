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

export default {
  name: 'app-compose-post',
  components: {
    AppAlert
  },
  data () {
    return {
      post: {
        id: null,
        text: ''
      },
      disabled: false,
      error: null
    }
  },
  mounted () {
    if (this.$store.state.modal.payload) {
      this.post = Object.assign({}, this.$store.state.modal.payload)
    }
    this.$refs.textarea.focus()
  },
  methods: {
    submit () {
      if (this.disabled) return
      this.disabled = true
      this.error = null

      this.$store.dispatch('posts/' + (this.post.id ? 'patch' : 'post'), this.post)
        .then(response => {
          if (this.$store.state.modal.component === 'post-composer-modal') {
            this.$store.commit('modal/hide')
          }
          this.$router.push('/posts/' + response.data.id)
        })
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
  resize: vertical;
}
</style>
