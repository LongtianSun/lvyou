import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/itinerary',
    name: '/itinerary',
    component: () => import('@/components/itinerary')
  },
  {
    path: '/detail',
    name: '/detail',
    component: () => import('@/components/detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
