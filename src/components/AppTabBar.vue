<template>
  <div class="app-tab-bar hidden-lg-up">
    <nav class="navbar navbar-light bg-faded fixed-bottom">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active" exact>
            <span v-html="octicons.home.toSVG()"></span> Home
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
  }
}
</script>

<style scoped>
</style>
