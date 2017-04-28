<template>
  <div class="modal-open">
    <transition name="slide-fade">
      <div class="modal show" v-if="component">
        <div class="modal-dialog" role="document">
          <component :is="component"></component>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="modal-backdrop show" v-if="component"></div>
    </transition>
  </div>
</template>

<script>
import PostComposerModal from '@/modals/PostComposer'

export default {
  name: 'modal',
  components: {
    PostComposerModal
  },
  watch: {
    '$route' () {
      this.$store.commit('modal/hide')
    }
  },
  computed: {
    component () {
      return this.$store.state.modal.component
    }
  }
}
</script>

<style scoped>
.show {
  display: block;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
</style>
