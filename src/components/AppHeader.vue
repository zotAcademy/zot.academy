<template>
  <div class="app-header">
    <nav class="navbar navbar-light bg-faded fixed-top px-0">
      <div class="container d-flex flex-row">
        <a class="navbar-brand mr-auto mr-lg-3" href="#" @click.prevent>Zot Academy</a>
        <ul class="navbar-nav flex-row mr-auto hidden-md-down">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active" exact>
              <span v-html="home()"></span> Home
            </router-link>
          </li>
          <li class="nav-item" v-if="authenticated">
            <router-link class="nav-link" to="/mentions" active-class="active" exact>
              <span v-html="mention()"></span> Mentions
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav flex-row">
          <li class="nav-item hidden-md-down">
            <form class="navbar-nav form-inline" @submit.prevent="$router.push({path: '/search', query: {q: search}})">
              <input class="form-control" type="text" placeholder="Search" v-model="search">
            </form>
          </li>
          <transition name="slide-fade" mode="out-in">
            <li class="nav-item dropdown" :class="{show: dropdown.expanded}" v-if="authenticated" key="isAuthenticated">
              <a class="nav-link dropdown-toggle d-inline hidden-md-down mr-2" href="#" aria-haspopup="true" :aria-expanded="dropdown.expanded" @click.prevent="dropdown.expanded = !dropdown.expanded" v-on-clickaway="closeDropdown">
                @{{ username }}
              </a>
              <router-link class="btn btn-outline-primary py-1 px-2 hidden-md-up" to="/posts/new" v-html="comment({height:28})"></router-link>
              <a class="btn btn-outline-primary py-1 px-2 hidden-sm-down" href="/posts/new" v-html="comment({height:28})" @click.prevent="compose"></a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <router-link class="dropdown-item" :to="'/' + username">View profile</router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" :href="$route.path" @click.prevent="signout">Sign out</a>
              </div>
            </li>
            <li class="nav-item" v-else key="isUnauthenticated">
              <router-link class="btn btn-outline-primary hidden-md-down" to="/signin">Sign in</router-link>
              <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
            </li>
          </transition>
        </ul>
      </div>
    </nav>
    <div class="progress" v-if="loading">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CollapseTransition from '../transitions/Collapse'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'app-header',
  mixins: [ clickaway ],
  components: {
    CollapseTransition
  },
  created () {
    if (this.$route.name === 'search') {
      this.search = this.$route.query.q
    }
  },
  data () {
    return {
      search: '',
      navbar: {
        expanded: false
      },
      dropdown: {
        expanded: false
      }
    }
  },
  watch: {
    '$route' () {
      this.search = this.$route.name === 'search' ? this.$route.query.q : ''
      this.navbar.expanded = this.dropdown.expanded = false
    }
  },
  computed: {
    ...mapGetters({
      home: 'octicons/home',
      mention: 'octicons/mention',
      comment: 'octicons/comment',
      loading: 'requests/loading',
      authenticated: 'session/authenticated',
      username: 'session/username'
    })
  },
  methods: {
    compose () {
      if (this.$route.name !== 'new-post') {
        this.$store.commit('modal/show', 'post-composer-modal')
      }
    },
    closeDropdown () {
      this.dropdown.expanded = false
    },
    signout () {
      this.$store.dispatch('session/signout')
        .then(() => this.closeDropdown())
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.container {
  position: static;
  width: 100%;
  max-width: 890px;
}
.progress {
  position: absolute;
  top: 0;
  width: 100%;
  height: 4px;
  border-radius: 0;
}
.progress-bar {
  width: 100%;
}
.nav-item + .nav-item {
  margin-left: .75em;
}

.slide-fade-enter-active {
  transition: all .35s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
}
</style>
