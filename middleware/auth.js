import * as cookies from '~/plugins/vendor/cookie-universal-nuxt.js'

const ROUTES = {
  index: '/',
  login: '/login'
}

export default function ({ store, route, redirect, app }) {
  if (isAuthorized(store, app)) {
    setDataFromCookies(store, app)
    redirectToIndexFromLogin(app, redirect)
  } else {
    redirectToLogin(route, redirect)
  }
}

function isAuthorized (store, app) {
  return store.getters['auth/authorized'] || app.$cookies.get(cookies.auth.name)
}

function setDataFromCookies (store, app) {
  store.dispatch('auth/setAuthorized', true)
  store.dispatch('auth/setToken', app.$cookies.get(cookies.token.name))
  store.dispatch('auth/prolongAuthCookies')
}

function redirectToIndexFromLogin (app, redirect) {
  if (app.context.route.fullPath !== ROUTES.login) { return }
  redirect(ROUTES.index)
}

function redirectToLogin (route, redirect) {
  if (route.name === 'login') { return }
  return redirect(ROUTES.login)
}
