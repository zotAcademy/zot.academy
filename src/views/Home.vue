<template>
  <div class="container my-3">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = null">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="error-message">{{ error.message }}</span>
    </div>
    <div class="card mb-3" v-for="question in questions">
      <div class="card-block">
        <p class="card-text"><small class="text-muted"><router-link class="text-muted" :to="'/' + question.user.username">@{{ question.user.username }}</router-link> asked {{ question.createdAt | fromNow }}</small></p>
        <p class="card-text">{{ question.text }}</p>
        <router-link class="card-link" :to="'/questions/' + question.id" v-html="octicons.reply"></router-link>
        <router-link class="card-link hidden-md-up" v-html="octicons.edit" :to="'/questions/' + question.id + '/edit'" v-if="editable(question)"></router-link>
        <a :href="'/questions/' + question.id + '/edit'" class="card-link hidden-sm-down" v-html="octicons.edit" @click.prevent></a>
        <a :href="'/questions/' + question.id" class="card-link" v-html="octicons.trashcan" v-if="deletable(question)" @click.prevent="del(question)"></a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { reply, pencil as edit, trashcan } from 'octicons'
import api from '@/api'

export default {
  name: 'home',
  created () {
    api.get('/questions/')
      .then(response => { this.questions = response.data })
      .catch(error => { this.error = error.response.data })
  },
  data () {
    return {
      octicons: {
        edit: edit.toSVG(),
        reply: reply.toSVG(),
        trashcan: trashcan.toSVG()
      },
      questions: [],
      error: null
    }
  },
  filters: {
    fromNow: date => moment(date).fromNow()
  },
  methods: {
    editable (question) {
      return question.userId === this.$store.state.session.userId
    },
    deletable (question) {
      return this.editable(question) && question.answers && question.answers.length === 0
    },
    del (question) {
      api.delete('/questions/' + question.id)
        .then(response => {
          for (var i in this.questions) {
            if (this.questions[i].id === question.id) {
              this.questions.splice(i, 1)
              break
            }
          }
        })
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
