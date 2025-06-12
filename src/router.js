import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Accueil from './views/accueil'
import ParcoursMission from './views/parcours-mission'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Accueil',
      path: '/',
      component: Accueil,
    },
    {
      name: 'ParcoursMission',
      path: '/parcours-mission',
      component: ParcoursMission,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
