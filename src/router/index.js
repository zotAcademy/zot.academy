import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Search from '@/views/Search'

import Signin from '@/views/Signin'
import Signup from '@/views/Signup'

import NewPost from '@/views/NewPost'
import EditPost from '@/views/EditPost'
import Post from '@/views/Post'

import Mentions from '@/views/Mentions'
import Settings from '@/views/Settings'

import Profile from '@/views/Profile'

import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/signin',
    name: 'signin',
    component: Signin
  }, {
    path: '/signup',
    name: 'signup',
    component: Signup
  }, {
    path: '/posts/new',
    name: 'new-post',
    component: NewPost,
    meta: {
      auth: true
    }
  }, {
    path: '/posts/:id/edit',
    name: 'edit-post',
    component: EditPost,
    meta: {
      auth: true
    },
    props: true
  }, {
    path: '/posts/:id',
    name: 'post',
    component: Post,
    props: true
  }, {
    path: '/mentions',
    name: 'mentions',
    component: Mentions,
    meta: {
      auth: true
    }
  }, {
    path: '/settings',
    name: 'settings',
    component: Settings,
    props: true
  }, {
    path: '/:username',
    name: 'profile',
    component: Profile,
    props: true
  }, {
    path: '*',
    component: NotFound
  }]
})
