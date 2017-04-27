<template>
  <div class="alert show" :class="{ 'alert-dismissible': dismissible }" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="$emit('dismiss')" v-if="dismissible">
      <span aria-hidden="true">&times;</span>
    </button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-alert',
  props: ['dismissible']
}
</script>
