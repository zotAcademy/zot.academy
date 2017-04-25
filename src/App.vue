<template>
  <div id="app">
    <app-layout>
      <app-header slot="header"></app-header>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <app-footer slot="footer"></app-footer>
    </app-layout>
  </div>
</template>

<script>
import AppLayout from '@/components/AppLayout'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppQuestionSummary from '@/components/AppQuestionSummary'

export default {
  name: 'app',
  components: {
    AppLayout,
    AppHeader,
    AppFooter,
    AppQuestionSummary
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .375s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(20px);
}
.slide-fade-leave-to {
  transform: translateX(-20px);
}
</style>
