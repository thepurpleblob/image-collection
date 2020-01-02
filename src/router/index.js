import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import SearchResult from '../views/SearchResult.vue'
import Item from '@/views/Item.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    //name: 'home',
    component: Search
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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
