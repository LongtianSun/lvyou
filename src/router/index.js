import store from '@/store/index'
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
  },
  {
    path: '/detailMap',
    name: '/detailMap',
    component: () => import('@/components/detailMap.vue')
  },
  {
    path: '/createitinerary',
    component: () => import('@/components/createitinerary/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/itineraryhome',
    component: () => import('@/views/itineraryhome/index.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})

const arr = ['/itineraryhome', '/createitinerary']

router.beforeEach((to, form, next) => {
  if(arr.includes(to.fullPath)) {
    if(!store.state.userInfo.username) {
      alert('请先登录')
      next('/login')
    }else {
      next()
    }
  }else {
    next()
  }
})

export default router
