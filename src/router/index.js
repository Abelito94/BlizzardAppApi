import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Profile from '../views/Profile'
import Hero from '../views/Hero/Hero'
import About from '../views/About'

Vue.use(Router)

// Configuración rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/region/:region/profile/:battleTag',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/region/:region/profile/:battleTag/hero/:heroId',
    name: 'Hero',
    component: Hero
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  },
  {
    path: '*',
    redirect: { name: 'Home' }
  }
]

const router = new Router({
  routes
})

export default router
