import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Index2 from '../views/Index2.vue'
import BrandStory from '../views/BrandStory'
import HealthCare from '../views/HealthCare'
import Cooperation from '../views/Cooperation'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/index2',
    name: 'Index2',
    component: Index2
  },
  {
    path: '/brandstory',
    name: 'BrandStory',
    component: () => import(/* webpackChunkName: "brandStory" */ '../views/BrandStory.vue')
  },
  {
    path: '/healthcare',
    name: 'HealthCare',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "healthCare" */ '../views/HealthCare.vue')
  },
  {
    path: '/cooperation',
    name: 'Cooperation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Cooperation.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
