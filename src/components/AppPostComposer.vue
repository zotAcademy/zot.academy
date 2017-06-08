<template>
  <form @submit.prevent="submit" v-show="show">
    <app-alert v-if="error" class="alert-danger" :dismissible="true" @dismiss="error = null">
      {{ error.message }}
    </app-alert>
    <div class="form-group">
      <textarea class="form-control" rows="5" placeholder="What are you wondering?" ref="textarea" v-model="post.text"></textarea>
    </div>
    <button type="submit" class="btn btn-primary float-right" :disabled="disabled">Post</button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import AppAlert from '@/components/AppAlert'

export default {
  name: 'app-post-composer',
  components: {
    AppAlert
  },
  data () {
    return {
      post: {
        id: null,
        text: '',
        in_reply_to_post_id: null
      },
      show: true,
      disabled: false,
      error: null
    }
  },
  created () {
    if (this.$store.state.modal.component === 'post-composer-modal' && this.$store.state.modal.payload) {
      this.post = Object.assign({}, this.$store.state.modal.payload)
    } else if (this.$route.name === 'edit-post' || this.$route.name === 'reply-post') {
      var id = +this.$route.params.id
      var post = this.getPostById(id)

      if (post != null) {
        if (this.$route.name === 'edit-post') {
          this.post = post
        } else {
          this.post.text = '@' + post.user.username + ' '
          this.post.in_reply_to_post_id = post.id
        }
      } else {
        this.show = false
        this.$store.dispatch('posts/get', id)
          .then(() => {
            post = this.getPostById(id)
            if (this.$route.name === 'edit-post') {
              this.post = post
            } else {
              this.post.text = '@' + post.user.username + ' '
              this.post.in_reply_to_post_id = post.id
            }
            this.show = true
          })
          .catch(error => this.$store.commit('error/throw', error))
      }
    }
  },
  mounted () {
    var textarea = this.$refs.textarea
    var length = textarea.value.length

    if (textarea.setSelectionRange) {
      textarea.focus()
      textarea.setSelectionRange(length, length)
    } else if (textarea.createTextRange) {
      var range = textarea.createTextRange()
      range.collapse(true)
      range.moveEnd('character', length)
      range.moveStart('character', length)
      range.select()
    }
  },
  computed: {
    ...mapGetters({
      getPostById: 'posts/getPostById'
    })
  },
  methods: {
    submit () {
      if (this.disabled) return
      this.disabled = true
      this.error = null

      this.$store.dispatch('posts/' + (this.post.id ? 'patch' : 'post'), this.post)
        .then(response => {
          if (this.$store.state.modal.component === 'post-composer-modal') {
            this.$store.commit('modal/hide')
          }
          if (this.post.id == null) {
            if (response.data.in_reply_to_post_id) {
              if (this.$route.name === 'post') {
                this.$store.dispatch('timelines/get', '/posts/' + response.data.in_reply_to_post_id + '/replies/')
                  .catch(() => {})
              } else {
                this.$router.push('/posts/' + response.data.in_reply_to_post_id)
              }
            } else {
              this.$router.push('/posts/' + response.data.id)
            }
          }
        })
        .catch(error => {
          this.error = error.response.data
          this.disabled = false
        })
    }
  }
}
</script>

<style scoped>
textarea {
  resize: vertical;
}
</style>
