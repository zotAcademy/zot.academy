<template>
  <div class="container my-3">
    <div class="card mb-3">
      <div class="card-block">
        <p class="card-text">Have an account? <router-link to="/login">Log in</router-link>.</p>
      </div>
    </div>
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="card mb-3">
      <div class="card-block">
        <h4 class="card-title">Sign up</h4>
        <form @submit.prevent="signup">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="username" max="39" v-model="credential.username">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="email" max="254" v-model="credential.email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="password" max="255" v-model="credential.password">
          </div>
          <button class="btn btn-block btn-primary" :disabled="disabled">Sign me up!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-signup',
  data () {
    return {
      credential: {
        username: '',
        email: '',
        password: ''
      },
      disabled: false,
      error: null
    }
  },
  methods: {
    signup () {
      if (this.disabled) return
      this.disabled = true

      var self = this
      this.$store.dispatch('session/signup', this.credential)
        .then(function () {
          self.$store.dispatch('redirection/pop').then(function (path) {
            self.$router.push(path)
          }).catch(function () {
            self.$router.push('/')
          })
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
.error-message {
  white-space: pre-wrap;
}
</style>
