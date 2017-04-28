<template>
  <div class="my-3">
    <app-alert v-if="error" class="alert-danger" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="card">
      <div class="card-block">
        <p class="card-text"><small class="text-muted"><router-link class="text-muted" :to="'/' + post.user.username">@{{ post.user.username }}</router-link> posted {{ post.createdAt | fromNow }}</small></p>
        <p class="card-text">{{ post.text }}</p>

        <a :href="path" class="card-link" v-html="octicons.reply.toSVG()" v-if="$route.name === 'post'" @click.prevent></a>
        <router-link class="card-link" v-html="octicons['comment-discussion'].toSVG()" :to="path" v-else></router-link>

        <router-link class="card-link hidden-md-up" v-html="octicons.pencil.toSVG()" :to="path + '/edit'" v-if="editable"></router-link>
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
  name: 'app-post',
  props: ['post'],
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
      return '/posts/' + this.post.id
    },
    editable () {
      return this.post.userId === this.$store.state.session.userId
    },
    deletable () {
      return this.editable && this.post.comments.length === 0
    }
  },
  filters: {
    fromNow: date => moment(date).fromNow()
  },
  methods: {
    remove () {
      api.delete('/posts/' + this.post.id)
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
