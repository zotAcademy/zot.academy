<template>
  <div>
    <app-alert v-if="error" class="alert-danger my-3" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="card my-3">
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
    <div class="card my-3">
      <div class="card-block">
        <p class="card-text">New to Zot Academy? <router-link to="/signup">Create an account</router-link>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppAlert from '@/components/AppAlert'

export default {
  name: 'app-login',
  components: {
    AppAlert
  },
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

<style scoped>
</style>
