<template>
  <div class="app-tab-bar hidden-lg-up">
    <nav class="navbar navbar-light bg-faded fixed-bottom">
      <ul class="navbar-nav flex-row row">
        <li class="nav-item col">
          <router-link class="nav-link" to="/" active-class="active" exact>
            <span v-html="home()"></span>
            <small>Home</small>
          </router-link>
        </li>
        <li class="nav-item col">
          <router-link class="nav-link" to="/search" active-class="active" exact>
            <span v-html="search()"></span>
            <small>Search</small>
          </router-link>
        </li>
        <li class="nav-item col" v-if="authenticated">
          <router-link class="nav-link" to="/mentions" active-class="active" exact>
            <span v-html="mention()"></span>
            <small>Mentions</small>
          </router-link>
        </li>
        <li class="nav-item col" v-if="authenticated">
          <router-link class="nav-link" :to="'/' + username" active-class="active" exact>
            <span v-html="person()"></span>
            <small>Profile</small>
          </router-link>
        </li>
        <li class="nav-item col" v-if="!authenticated">
          <router-link class="nav-link" to="/signin" active-class="active" exact>
            <span v-html="sign_in()"></span>
            <small>Sign in</small>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app-tab-bar',
  computed: {
    ...mapGetters({
      home: 'octicons/home',
      search: 'octicons/search',
      mention: 'octicons/mention',
      person: 'octicons/person',
      sign_in: 'octicons/sign-in',
      authenticated: 'session/authenticated',
      username: 'session/username'
    })
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
