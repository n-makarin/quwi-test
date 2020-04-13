
import * as cookies from '~/plugins/vendor/cookie-universal-nuxt.js'

const ROUTES = {
  index: '/',
  login: '/login'
}

export default function ({ store, redirect, app }) {
  if (isAuthorized(store, app)) {
    store.dispatch('auth/setAuthorized', true)
    store.dispatch('auth/setToken', app.$cookies.get(cookies.token.name))
    store.dispatch('auth/prolongAuthCookies')
  } else {
    if (app.context.route.fullPath === ROUTES.login) { return }
    return redirect(ROUTES.login)
  }
}

function isAuthorized (store, app) {
  return store.getters['auth/authorized'] || app.$cookies.get(cookies.auth.name)
}
