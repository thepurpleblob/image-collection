import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import SearchResult from '../views/SearchResult.vue'
import Single from '../views/Single.vue'
import Login from '@/views/Login.vue'
import Upload from '@/views/Upload.vue'
import About from '@/views/About.vue'
import ServerError from '@/views/ServerError.vue'

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
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/servererror',
    name: 'servererror',
    component: ServerError
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
