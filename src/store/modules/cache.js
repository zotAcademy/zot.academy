import Vue from 'vue'

const models = {
  post: {
    user: 'user',
    replies: 'post'
  },
  user: {}
}

const pluralify = str => str + 's'
const isPlural = str => /s$/.test(str)

export default {
  namespaced: true,
  state: {
    ...(() => {
      var state = {}

      Object.keys(models).forEach(model => {
        state[pluralify(model)] = {}
      })

      return state
    })()
  },
  getters: {
    ...(() => {
      var getters = {}

      Object.keys(models).forEach(model => {
        getters[model] = (state, getters) => (id) => {
          var data = state[pluralify(model)][id]

          if (data != null) {
            var include = models[model]

            if (include != null) {
              Object.keys(include).forEach(key => {
                var submodel = include[key]

                if (data[key] != null) {
                  if (isPlural(key)) {
                    data[key] = data[key].map(entry => getters[submodel](entry.id))
                  } else {
                    data[key] = getters[submodel](data[key].id)
                  }
                }
              })
            }
          }

          return data
        }
      })

      return getters
    })()
  },
  mutations: {
    ...(() => {
      var mutations = {}

      Object.keys(models).forEach(model => {
        mutations[model] = (state, entry) => {
          if (state[pluralify(model)][entry.id]) {
            entry = Object.assign(state[pluralify(model)][entry.id], entry)
          }
          Vue.set(state[pluralify(model)], entry.id, entry)
        }
      })

      return mutations
    })()
  },
  actions: {
    ...(() => {
      var actions = {}

      Object.keys(models).forEach(model => {
        actions[model] = ({ commit, dispatch }, data) => {
          var include = models[model]

          if (include != null) {
            Object.keys(include).forEach(key => {
              var submodel = include[key]

              if (data[key] != null) {
                dispatch((isPlural(key) ? pluralify(submodel) : submodel), data[key])

                if (isPlural(key)) {
                  data[key] = data[key].map(entry => {
                    return { id: entry.id }
                  })
                } else {
                  data[key] = { id: data[key].id }
                }
              }
            })
          }

          commit(model, data)
        }

        actions[pluralify(model)] = ({ dispatch }, data) => {
          data.forEach(entry => {
            dispatch(model, entry)
          })
        }
      })

      return actions
    })()
  }
}
