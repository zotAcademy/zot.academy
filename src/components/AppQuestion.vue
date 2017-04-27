<template>
  <div class="card mb-3">
    <div class="card-block">
      <p class="card-text"><small class="text-muted"><router-link class="text-muted" :to="'/' + question.user.username">@{{ question.user.username }}</router-link> asked {{ question.createdAt | fromNow }}</small></p>
      <p class="card-text">{{ question.text }}</p>
      <a :href="path" class="card-link" v-html="octicons.reply" @click.prevent></a>
      <router-link class="card-link hidden-md-up" v-html="octicons.edit" :to="path + '/edit'" append v-if="editable"></router-link>
      <a :href="path + '/edit'" class="card-link hidden-sm-down" v-html="octicons.edit" v-if="editable" @click.prevent></a>
      <a :href="path" class="card-link" v-html="octicons.trashcan" v-if="deletable" @click.prevent="remove"></a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { reply, pencil as edit, trashcan } from 'octicons'
import api from '@/api'

export default {
  name: 'app-question',
  props: ['question'],
  data () {
    return {
      octicons: {
        edit: edit.toSVG(),
        reply: reply.toSVG(),
        trashcan: trashcan.toSVG()
      },
      show: true
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
.card {
  max-width: 36.875rem;
  margin-left: auto;
  margin-right: auto;
}
.card-text {
  white-space: pre-wrap;
}
</style>
