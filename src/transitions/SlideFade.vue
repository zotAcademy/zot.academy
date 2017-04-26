<template>
  <transition name="slide-fade" :mode="mode">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'slide-fade-transition',
  props: ['mode']
}
</script>

<!-- Add "scoped" atribute to limit CSS to this component only -->
<style scoped>
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
