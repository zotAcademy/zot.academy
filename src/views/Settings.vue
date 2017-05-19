<template>
  <div class="container my-5">

    <div class="card my-3">
      <div class="card-block">
        <p class="card-text"> Want another account? <router-link to="/signup">Create an account</router-link>.</p>
      </div>
    </div>


    <div class = "card my-3">
      <div class="card-block">
        <h4 class="card-title">Edit Login Info</h4>

        <div class="form-group">
          <p> New username? </p>
          <input type="text" class="form-control" placeholder = "New username">
        </div>

        <div class="form-group">
          <p> New email? </p>
          <input type="text" class="form-control" placeholder = "New email">
        </div>

        <div class="form-group">
          <p> New password? </p>
          <input type="text" class="form-control" placeholder = "New password" max = "254">
        </div>

        <button class="btn btn-block btn-primary" > Submit Changes <router-link to="/home"> </router-link> </button>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'settings',
  components: {
  },
  created () {
  },
  computed: {
  }
}
</script>

<style scoped>
.container {
  max-width: 430px;
}
</style>
