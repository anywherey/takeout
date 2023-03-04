import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from "@/components/missingPage.vue"
Vue.use(VueRouter)

const routes = [
  //其他路由配置
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    // name: 'home',
    redirect: '/home',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home', // 默认子路由，只能有1个
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/member',
        name: 'member',
        component: () => import('@/views/member')
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('@/views/orderList')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/shop-details/:shopid?',
    name: 'shopDetails',
    component: () => import('@/views/shopDetails'),
    meta: { title: '商店详情页' }
  },
  {
    path: '/my-address',
    name: 'my-address',
    component: () => import('@/views/my/address/address.vue'),
    meta: { title: '地址' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
