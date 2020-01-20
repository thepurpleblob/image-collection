import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import SearchResult from '../views/SearchResult.vue'
import Item from '@/views/Item.vue'
import Login from '@/views/Login.vue'

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
    path: '/item/:objectnumber',
    name: '/item',
    component: Item,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
