import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/Layout'),
    children: [
      // 如何设置默认子路由
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'list',
        component: () => import('@/views/List')
      },
      {
        path: 'news',
        component: () => import('@/views/News')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile')
      }
    ]
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  },
  {
    path: '/rent',
    component: () => import('@/views/Rent')
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/Detail')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  }
]

const router = new VueRouter({
  routes
})

export default router
