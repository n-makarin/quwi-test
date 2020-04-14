import * as cookies from '~/plugins/vendor/cookie-universal-nuxt.js'
import * as api from '~/api/index'

export const state = () => ({
  authorized: false,
  token: ''
})

export const mutations = {
  SET_AUTHORIZED (state, value) {
    state.authorized = value
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    const response = await api.login({ email, password })
      .catch((err) => {
        console.log(err)
      })
    if (!response || response.status !== 200) { return }
    commit('SET_AUTHORIZED', true)
    commit('SET_TOKEN', response.data.token)
    this.app.$cookies.set(cookies.auth.name, true, {
      maxAge: cookies.auth.maxAge
    })
    this.app.$cookies.set(cookies.token.name, response.data.token, {
      maxAge: cookies.token.maxAge
    })
  },
  setAuthorized ({ commit }, value) {
    commit('SET_AUTHORIZED', value)
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  logout ({ commit }) {
    commit('SET_AUTHORIZED', false)
    this.app.$cookies.remove(cookies.auth.name)
  },
  prolongAuthCookies () {
    this.app.$cookies.set(cookies.auth.name, true, {
      maxAge: cookies.auth.maxAge
    })
    this.app.$cookies.set(cookies.token.name,
      this.app.$cookies.get(cookies.token.name), {
        maxAge: cookies.token.maxAge
      })
  }
}

export const getters = {
  authorized: state => state.authorized,
  token: state => state.token
}
