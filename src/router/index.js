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
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Cooperation.vue')
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
