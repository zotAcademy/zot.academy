<template>
  <div class="container my-5">
    <h1 class="display-1" v-if="status">{{ status }}</h1>
    <h1 class="display-4" v-else>{{ statusText }}</h1>
    <p class="lead">{{ message }}</p>
    <hr>
    <p v-if="status">
      <a href="/" class="btn btn-outline-primary" @click.prevent="$router.back()">Back</a>
      <router-link to="/" class="btn btn-outline-primary">Home</router-link>
    </p>
    <a :href="$route.path" class="btn btn-outline-primary" v-else>Retry</a>
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
