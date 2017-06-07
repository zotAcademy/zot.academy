<template>
  <div class="container my-3">
    <div class="hidden-lg-up float-right" v-if="username === sessionUsername">
      <a :href="$route.path" class="btn btn-secondary btn-sm" @click.prevent="signout">
        <span v-html="sign_out()"></span> <span class="hidden-xs-down">Sign out</span>
      </a>
    </div>
    <div v-if="show || getPosts(timeline).length > 0">
      <h1>@{{ username }}</h1>
      <app-timeline :posts="getPosts(timeline)"></app-timeline>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppTimeline from '@/components/AppTimeline'

export default {
  name: 'profile',
  props: ['username'],
  components: {
    AppTimeline
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    this.$store.dispatch('timelines/get', this.timeline)
      .then(() => { this.show = true })
      .catch(error => this.$store.commit('error/throw', error))
  },
  computed: {
    ...mapGetters({
      gear: 'octicons/gear',
      sign_out: 'octicons/sign-out',
      authenticated: 'session/authenticated',
      sessionUsername: 'session/username',
      getPosts: 'timelines/getPosts'
    }),
    timeline () {
      return '/users/' + this.username + '/posts/'
    }
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
.container {
  max-width: 590px;
}
</style>
