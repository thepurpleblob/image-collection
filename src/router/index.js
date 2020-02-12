import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import SearchResult from '../views/SearchResult.vue'
import Single from '../views/Single.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    //name: 'home',
    component: Search,
    alias: '/',
  },
  {
    path: '/searchresult',
    name: 'searchresult',
    component: SearchResult,
    props: true
  },
  {
    path: '/single',
    name: 'single',
    component: Single,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
