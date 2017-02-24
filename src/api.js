import axios from 'axios'
import store from '@/store'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  timeout: 3000
})

api.interceptors.request.use(function (config) {
  store.dispatch('requests/increment')
  return config
}, function (error) {
  store.dispatch('requests/decrement')
  return Promise.reject(error)
})

api.interceptors.response.use(function (response) {
  store.dispatch('requests/decrement')
  return response
}, function (error) {
  store.dispatch('requests/decrement')
  if (error.response == null) {
    error.response = {
      data: {
        message: 'Could not connect to the server.'
      },
      statusText: 'Network Error'
    }
  }
  return Promise.reject(error)
})

export default api
