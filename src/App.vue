<template>
  <div id="app">
    <app-layout>
      <app-header slot="header"></app-header>
      <slide-fade-transition mode="out-in">
        <router-view></router-view>
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
import Modal from '@/modals/Modal'
import SlideFadeTransition from '@/transitions/SlideFade'

export default {
  name: 'app',
  components: {
    AppLayout,
    AppHeader,
    AppFooter,
    Modal,
    SlideFadeTransition
  }
}
</script>

<style>
.octicon {
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
}
</style>
