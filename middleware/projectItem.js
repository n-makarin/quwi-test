
export default function ({ store, redirect, app }) {
  if (isProjectItemPage(store, app)) {
    redirect('/')
  }
}

function isProjectItemPage (store, app) {
  return app.router.history.current.fullPath !== '/' && !store.getters['project/data'].name
}
