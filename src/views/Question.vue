<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="card mb-3" v-if="question">
      <div class="card-block">
        <p class="card-text"><small class="text-muted"><router-link class="text-muted" :to="'/' + question.user.username">@{{ question.user.username }}</router-link> asked {{ question.createdAt | fromNow }}</small></p>
        <p class="card-text">{{ question.text }}</p>
        <a href="#" class="card-link" v-html="octicons.reply"></a>
        <router-link class="card-link" v-html="octicons.edit" to="edit" append v-if="editable"></router-link>
        <a href="#delete" class="card-link" v-html="octicons.trashcan" v-if="deletable" @click.prevent="del"></a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { reply, pencil as edit, trashcan } from 'octicons'
import api from '@/api'

export default {
  name: 'question',
  props: ['id'],
  beforeRouteUpdate (to, from, next) {
    api.get('/questions/' + to.params.id)
      .then(response => { this.question = response.data })
      .catch(error => { this.error = error.response.data })
    next()
  },
  created () {
    api.get('/questions/' + this.id)
      .then(response => { this.question = response.data })
      .catch(error => { this.error = error.response.data })
  },
  data () {
    return {
      octicons: {
        edit: edit.toSVG(),
        reply: reply.toSVG(),
        trashcan: trashcan.toSVG()
      },
      question: null,
      error: null
    }
  },
  computed: {
    editable () {
      return this.question.userId === this.$store.state.session.userId
    },
    deletable () {
      return this.question.answers.length === 0
    }
  },
  filters: {
    fromNow: date => moment(date).fromNow()
  },
  methods: {
    del () {
      api.delete('/questions/' + this.id)
        .then(response => this.$router.push('/'))
        .catch(error => { this.error = error.response.data })
    }
  }
}
</script>

<style scoped>
.error-message,
.card-text {
  white-space: pre-wrap;
}
.container {
  max-width: 36.875rem;
}
</style>
