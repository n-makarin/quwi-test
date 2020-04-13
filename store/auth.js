import * as cookies from '~/plugins/vendor/cookie-universal-nuxt.js'
import * as api from '~/api/index'

export const state = () => ({
  authorized: false,
  token: '',
  userId: ''
})

export const mutations = {
  SET_AUTHORIZED (state, value) {
    state.authorized = value
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_USER_ID (state, id) {
    state.userId = id
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
    commit('SET_USER_ID', response.data.app_init.user.id)
    this.app.$cookies.set(cookies.auth.name, true, {
      maxAge: cookies.auth.maxAge
    })
    this.app.$cookies.set(cookies.token.name, response.data.token, {
      maxAge: cookies.token.maxAge
    })
    this.app.$cookies.set(cookies.userId.name, response.data.app_init.user.id, {
      maxAge: cookies.userId.maxAge
    })
  },
  setAuthorized ({ commit }, value) {
    commit('SET_AUTHORIZED', value)
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  setUserId ({ commit }, id) {
    commit('SET_USER_ID', id)
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
    this.app.$cookies.set(cookies.userId.name,
      this.app.$cookies.get(cookies.userId.name), {
        maxAge: cookies.userId.maxAge
      })
  }
}

export const getters = {
  authorized: state => state.authorized,
  token: state => state.token,
  userId: state => state.userId
}
