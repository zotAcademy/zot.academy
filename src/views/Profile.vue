<template>
  <div class="container my-3">
    <div class="hidden-lg-up float-right" v-if="username === sessionUsername">
      <router-link to="/settings" class="btn btn-secondary btn-sm">
        <span v-html="octicons.gear.toSVG()"></span> <span class="hidden-xs-down">Settings</span>
      </router-link>
      <a :href="$route.path" class="btn btn-secondary btn-sm" @click.prevent="signout">
        <span v-html="octicons['sign-out'].toSVG()"></span> <span class="hidden-xs-down">Sign out</span>
      </a>
    </div>
    <h1>Profile</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import octicons from 'octicons'

export default {
  name: 'profile',
  props: ['username'],
  data () {
    return {
      octicons
    }
  },
  components: {
  },
  created () {
  },
  computed: {
    ...mapGetters({
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
