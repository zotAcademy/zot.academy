<template>
  <div class="container my-3">
    <div class="hidden-lg-up float-right" v-if="username === sessionUsername">
      <router-link to="/settings" class="btn btn-secondary btn-sm">
        <span v-html="gear()"></span> <span class="hidden-xs-down">Settings</span>
      </router-link>
      <a :href="$route.path" class="btn btn-secondary btn-sm" @click.prevent="signout">
        <span v-html="sign_out()"></span> <span class="hidden-xs-down">Sign out</span>
      </a>
    </div>
    <h1>Profile</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  props: ['username'],
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  computed: {
    ...mapGetters({
      gear: 'octicons/gear',
      sign_out: 'octicons/sign-out',
      authenticated: 'session/authenticated',
      sessionUsername: 'session/username'
    })
  },
  methods: {
    signout () {
      this.$store.dispatch('session/signout')
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
</style>
