<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="card mb-3">
      <div class="card-block">
        <h4 class="card-title">Create New Group</h4>
          <form @submit.prevent="createGroup">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Group name" v-model="group.name">
            </div>
            <button class="btn btn-block btn-primary">Create Group</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'app-create-group',
  data () {
    return {
      group: {
        name: ''
      },
      error: null
    }
  },
  methods: {
    createGroup () {
      var self = this
      api.post('/groups/', this.group)
        .then(function () {
          self.$router.push('/groups/' + self.group.name)
        })
        .catch(function (error) {
          self.error = error.response.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-message {
  white-space: pre-wrap;
}
.container {
  max-width: 26.25rem;
}
</style>
