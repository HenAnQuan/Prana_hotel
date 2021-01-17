import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import(/* webpackChunkName: "brandStory" */ '../views/Overview.vue')
  },
  {
    path: '/installation',
    name: 'Installation',
    component: () => import(/* webpackChunkName: "brandStory" */ '../views/Installation.vue')
  },
  {
    path: '/package',
    name: 'Package',
    component: () => import(/* webpackChunkName: "brandStory" */ '../views/Package.vue')
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import(/* webpackChunkName: "brandStory" */ '../views/Item.vue')
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: () => import(/* webpackChunkName: "brandStory" */ '../views/Workshop.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
