<template>
  <div id="app">
    <app-layout>
      <app-header slot="header"></app-header>
      <slide-fade-transition :name="name" mode="out-in">
        <error v-if="$store.state.error.response"></error>
        <router-view v-else></router-view>
      </slide-fade-transition>
      <app-footer slot="footer"></app-footer>
    </app-layout>
    <modal></modal>
  </div>
</template>

<script>
import AppLayout from '@/components/AppLayout'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import Error from '@/views/Error'
import Modal from '@/modals/Modal'
import SlideFadeTransition from '@/transitions/SlideFade'

export default {
  name: 'app',
  components: {
    AppLayout,
    AppHeader,
    AppFooter,
    Error,
    Modal,
    SlideFadeTransition
  },
  data () {
    return {
      name: null
    }
  },
  watch: {
    '$route' (to, from) {
      this.name = to.path.split('/').length < from.path.split('/').length ? 'slide-fade-right' : 'slide-fade-left'
    }
  }
}
</script>

<style>
body {
  padding-top: 3.5em;
  padding-bottom: 3.5em;
}
.octicon {
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
}
.container {
  max-width: 760px;
}
</style>
