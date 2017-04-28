import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Signup from '@/views/Signup'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import NewPost from '@/views/NewPost'
import Post from '@/views/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/signup',
    name: 'signup',
    component: Signup
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/posts/new',
    name: 'new-post',
    component: NewPost,
    meta: {
      auth: true
    }
  }, {
    path: '/posts/:id',
    name: 'post',
    component: Post,
    props: true
  }, {
    path: '*',
    component: NotFound
  }]
})
