<template>
  <div id="app">
    <app-layout>
      <app-header slot="header"></app-header>
      <slide-fade-transition mode="out-in">
        <app-error v-if="$store.state.error.response"></app-error>
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
import AppError from '@/components/AppError'
import Modal from '@/modals/Modal'
import SlideFadeTransition from '@/transitions/SlideFade'

export default {
  name: 'app',
  components: {
    AppLayout,
    AppHeader,
    AppFooter,
    AppError,
    Modal,
    SlideFadeTransition
  }
}
</script>

<style>
body {
  padding-top: 3.5em;
}
.octicon {
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
}
.container {
  max-width: 590px;
}
</style>
