import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Signup from '@/views/Signup'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import NotFound from '@/views/NotFound'
import NewQuestion from '@/views/NewQuestion'
import Question from '@/views/Question'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
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
    path: '/logout',
    component: Logout
  }, {
    path: '/questions/new',
    name: 'new-question',
    component: NewQuestion,
    meta: {
      auth: true
    }
  }, {
    path: '/questions/:id',
    component: Question,
    props: true
  }, {
    path: '*',
    component: NotFound
  }]
})
