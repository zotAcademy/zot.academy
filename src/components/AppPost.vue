<template>
  <div class="my-3">
    <app-alert v-if="error" class="alert-danger" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="card">
      <div class="card-block">
        <p class="card-text"><small class="text-muted"><router-link class="text-muted" :to="'/' + post.user.username">@{{ post.user.username }}</router-link> posted {{ post.created_at | fromNow }}</small></p>
        <p class="card-text" v-html="post.html" v-routerify></p>

        <a :href="path" class="card-link" v-html="comment_discussion()" v-if="$route.name === 'post'" @click.prevent></a>
        <router-link class="card-link" v-html="note()" :to="path" v-else></router-link>

        <router-link class="card-link hidden-md-up" v-html="pencil()" :to="path + '/edit'" v-if="editable"></router-link>
        <a :href="path + '/edit'" class="card-link hidden-sm-down" v-html="pencil()" v-if="editable" @click.prevent="edit"></a>

        <a :href="path" class="card-link" v-html="trashcan()" v-if="deletable" @click.prevent="remove"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppAlert from '@/components/AppAlert'
import routerify from '@/mixins/routerify'
import moment from 'moment'

export default {
  name: 'app-post',
  mixins: [ routerify ],
  props: ['post'],
  components: {
    AppAlert
  },
  data () {
    return {
      error: null
    }
  },
  computed: {
    ...mapGetters({
      comment_discussion: 'octicons/comment-discussion',
      note: 'octicons/note',
      pencil: 'octicons/pencil',
      trashcan: 'octicons/trashcan'
    }),
    path () {
      return '/posts/' + this.post.id
    },
    editable () {
      return this.$store.state.session.user && this.post.user_id === this.$store.state.session.user.id
    },
    deletable () {
      return this.editable
    }
  },
  filters: {
    fromNow: date => moment(date).fromNow()
  },
  methods: {
    edit () {
      this.$store.commit('modal/show', {
        component: 'post-composer-modal',
        payload: this.post
      })
    },
    remove () {
      this.$store.dispatch('posts/delete', this.post)
        .then(response => { this.$emit('remove') })
        .catch(error => { this.error = error.response.data })
    }
  }
}
</script>

<style scoped>
.card-text {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
