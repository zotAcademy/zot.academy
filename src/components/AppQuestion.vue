<template>
  <div class="container">
    <app-alert v-if="error" class="alert-danger" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="card">
      <div class="card-block">
        <p class="card-text"><small class="text-muted"><router-link class="text-muted" :to="'/' + question.user.username">@{{ question.user.username }}</router-link> asked {{ question.createdAt | fromNow }}</small></p>
        <p class="card-text">{{ question.text }}</p>
        <a :href="path" class="card-link" v-html="octicons['comment-discussion'].toSVG()" @click.prevent></a>
        <router-link class="card-link hidden-md-up" v-html="octicons.pencil.toSVG()" :to="path + '/edit'" append v-if="editable"></router-link>
        <a :href="path + '/edit'" class="card-link hidden-sm-down" v-html="octicons.pencil.toSVG()" v-if="editable" @click.prevent></a>
        <a :href="path" class="card-link" v-html="octicons.trashcan.toSVG()" v-if="deletable" @click.prevent="remove"></a>
      </div>
    </div>
  </div>
</template>

<script>
import AppAlert from '@/components/AppAlert'
import moment from 'moment'
import octicons from 'octicons'
import api from '@/api'

export default {
  name: 'app-question',
  props: ['question'],
  components: {
    AppAlert
  },
  data () {
    return {
      octicons,
      error: null
    }
  },
  computed: {
    path () {
      return '/questions/' + this.question.id
    },
    editable () {
      return this.question.userId === this.$store.state.session.userId
    },
    deletable () {
      return this.editable && this.question.answers.length === 0
    }
  },
  filters: {
    fromNow: date => moment(date).fromNow()
  },
  methods: {
    remove () {
      api.delete('/questions/' + this.question.id)
        .then(response => { this.$emit('remove') })
        .catch(error => { this.error = error.response.data })
    }
  }
}
</script>

<style scoped>
.card-text {
  white-space: pre-wrap;
}
</style>
