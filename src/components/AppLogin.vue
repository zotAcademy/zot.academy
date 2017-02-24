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
            <input type="text" class="form-control" placeholder="username" v-model="credential.username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="password" v-model="credential.password">
          </div>
          <button class="btn btn-block btn-primary">Log me in!</button>
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
      error: null
    }
  },
  methods: {
    login () {
      var self = this
      this.$store.dispatch('session/login', this.credential)
        .then(function () {
          self.$router.push('/')
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
</style>
