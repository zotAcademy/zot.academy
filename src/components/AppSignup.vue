<template>
  <div>
    <div class="card my-3">
      <div class="card-block">
        <p class="card-text">Have an account? <router-link to="/login">Log in</router-link>.</p>
      </div>
    </div>
    <app-alert v-if="error" class="alert-danger my-3" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="card my-3">
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
import AppAlert from '@/components/AppAlert'

export default {
  name: 'app-signup',
  components: {
    AppAlert
  },
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

      this.$store.dispatch('session/signup', this.credential)
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
