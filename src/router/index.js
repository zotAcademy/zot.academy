import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Signup from '@/views/Signup'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import NotFound from '@/views/NotFound'
import CreateGroup from '@/views/CreateGroup'
import contentPage from '@/views/contentPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/signup',
    component: Signup
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/content',
    component: contentPage
  }, {
    path: '/logout',
    component: Logout
  }, {
    path: '/groups/create',
    component: CreateGroup
  }, {
    path: '*',
    component: NotFound
  }]
})
