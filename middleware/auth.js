
import * as cookies from '~/plugins/vendor/cookie-universal-nuxt.js'

const ROUTES = {
  index: '/',
  login: '/login'
}

export default function ({ store, redirect, app }) {
  if (isAuthorized(store, app)) {
    store.dispatch('auth/setAuthorized', true)
    store.dispatch('auth/prolongAuth')
    return redirect(ROUTES.index)
  } else {
    if (app.context.route.fullPath === ROUTES.login) { return }
    return redirect(ROUTES.login)
  }
}

function isAuthorized (store, app) {
  return store.getters['auth/authorized'] || app.$cookies.get(cookies.auth.name)
}
