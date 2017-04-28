<template>
  <transition :name="name || 'slide-fade-left'" :mode="mode">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'slide-fade-transition',
  props: ['name', 'mode']
}
</script>

<style scoped>
.slide-fade-left-enter-active,
.slide-fade-right-enter-active {
  transition: all .1s ease;
}
.slide-fade-left-leave-active,
.slide-fade-right-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-left-enter, .slide-fade-left-leave-to,
.slide-fade-right-enter, .slide-fade-right-leave-to {
  opacity: 0;
}
.slide-fade-left-enter,
.slide-fade-right-leave-to {
  transform: translateX(30px);
}
.slide-fade-left-leave-to,
.slide-fade-right-enter {
  transform: translateX(-30px);
}
</style>
