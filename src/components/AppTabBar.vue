<template>
  <div class="app-tab-bar hidden-lg-up">
    <nav class="navbar navbar-light bg-faded fixed-bottom">
      <ul class="navbar-nav d-flex flex-row justify-content-around">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active" exact>
            <span v-html="octicons.home.toSVG()"></span>
            <small>Home</small>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/search" active-class="active" exact>
            <span v-html="octicons.search.toSVG()"></span>
            <small>Search</small>
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/mentions" active-class="active" exact>
            <span v-html="octicons.mention.toSVG()"></span>
            <small>Mentions</small>
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" :to="'/' + username" active-class="active" exact>
            <span v-html="octicons.person.toSVG()"></span>
            <small>Profile</small>
          </router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/signin" active-class="active" exact>
            <span v-html="octicons['sign-in'].toSVG()"></span>
            <small>Sign in</small>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import octicons from 'octicons'

export default {
  name: 'app-tab-bar',
  data () {
    return {
      octicons
    }
  },
  computed: {
    username () {
      return this.$store.state.session.user.username
    },
    isAuthenticated () {
      return this.$store.state.session.user && this.$store.state.session.user.id
    }
  }
}
</script>

<style scoped>
.nav-link {
  padding-top: 0;
  padding-bottom: 0;
  text-align: center;
}
span {
  display: block;
  height: 16px;
}
</style>
