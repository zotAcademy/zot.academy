<template>
  <div class="container my-5">
    <h1 class="display-1" v-if="status">{{ status }}</h1>
    <h1 class="display-4" v-else>{{ statusText }}</h1>
    <p class="lead">{{ message }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'error',
  computed: {
    status () {
      return this.$store.state.error.response.status
    },
    statusText () {
      return this.$store.state.error.response.statusText
    },
    message () {
      switch (this.$store.state.error.response.status) {
        case 404:
          return 'This is not the web page you are looking for.'
      }

      return this.$store.state.error.response.data.message
    }
  }
}
</script>
