import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Sermons from './components/pages/Sermons'
import Give from './components/pages/Give'
import Contact from './components/pages/Contact'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/sermons',
      component: Sermons
    },
    {
      path: '/give',
      component: Give
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

export default router
