<template>
  <transition name="collapse"
    @enter="before"
    @after-enter="after"
    @enter-cancelled="after"
    @leave="before"
    @after-leave="after"
    @leave-cancelled="after"
    >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'collapse-transition',
  methods: {
    before (el) {
      el.style.maxHeight = el.scrollHeight + 'px'
    },
    after (el) {
      el.style.maxHeight = ''
    }
  }
}
</script>

<style scoped>
.collapse-enter-active, .collapse-leave-active {
  overflow-y: hidden;
  transition: max-height .3s ease;
}
.collapse-enter, .collapse-leave-to {
  max-height: 0!important;
}
</style>
