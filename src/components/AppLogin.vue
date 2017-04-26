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
        <h4 class="card-title">Log in</h4>
        <form @submit.prevent="login">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="username or email" max="254" v-model="credential.username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="password" max="255" v-model="credential.password">
          </div>
          <button class="btn btn-block btn-primary" :disabled="disabled">Log me in!</button>
        </form>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-block">
        <p class="card-text">New to Zot Academy? <router-link to="/signup">Create an account</router-link>.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-login',
  data () {
    return {
      credential: {
        username: '',
        password: ''
      },
      disabled: false,
      error: null
    }
  },
  methods: {
    login () {
      if (this.disabled) return
      this.disabled = true

      this.$store.dispatch('session/login', this.credential)
        .then(() => {
          this.$store.dispatch('redirection/pop')
            .then(to => this.$router.push(to))
            .catch(() => this.$router.push('/'))
        })
        .catch(error => {
          this.error = error.response.data
          this.disabled = false
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
</style>
