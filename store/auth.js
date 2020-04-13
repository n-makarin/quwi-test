import * as cookies from '~/plugins/vendor/cookie-universal-nuxt.js'
import * as api from '~/api/index'

export const state = () => ({
  authorized: false
})

export const mutations = {
  SET_AUTHORIZED (state, value) {
    state.authorized = value
  }
}

export const actions = {
  login ({ commit }, { email, password }) {
    api.login({ email, password })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
        commit('SET_AUTHORIZED', true)
        this.app.$cookies.set(cookies.auth.name, true, {
          maxAge: cookies.auth.maxAge
        })
      })
  },
  setAuthorized ({ commit }, value) {
    commit('SET_AUTHORIZED', value)
  },
  logout ({ commit }) {
    commit('SET_AUTHORIZED', false)
    this.app.$cookies.remove(cookies.auth.name)
  },
  prolongAuth () {
    this.app.$cookies.set(cookies.auth.name, true, {
      maxAge: cookies.auth.maxAge
    })
  }
}

export const getters = {
  authorized: state => state.authorized
}
