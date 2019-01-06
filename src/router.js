import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首頁'
      },
      component: Home
    },
    {
      path: '/Library',
      name: 'Library',
      meta: {
        title: '圖鑑'
      },
      component: () => import('@/views/Library')
    },
    {
      path: '/Item',
      name: 'Item',
      meta: {
        title: '裝備資料'
      },
      component: () => import('@/views/Item')
    },
    {
      path: '/Soul',
      name: 'Soul',
      meta: {
        title: '魂卡資料'
      },
      component: () => import('@/views/Soul')
    },
    {
      path: '/Narrative',
      name: 'Narrative',
      meta: {
        title: '收集品試算'
      },
      component: () => import('@/views/Narrative')
    },
    {
      path: '/Live2D-Repacked',
      name: 'Live2DRepacked',
      meta: {
        title: '模組再包裝工具'
      },
      component: () => import('@/views/Live2DRepacked')
    },
    {
      path: '*',
      redirect: { name: 'Library' }
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
