import axios from 'axios'
import store from '@/store'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  timeout: 3000
})

api.interceptors.request.use(config => {
  store.dispatch('requests/increment')
  return config
}, error => {
  store.dispatch('requests/decrement')
  return Promise.reject(error)
})

api.interceptors.response.use(response => {
  store.dispatch('requests/decrement')
  return response
}, error => {
  store.dispatch('requests/decrement')
  if (error.response == null) {
    error.response = {
      data: {
        message: 'Unable to connect to the server.'
      },
      statusText: 'Network Error'
    }
  }
  return Promise.reject(error)
})

export default api
