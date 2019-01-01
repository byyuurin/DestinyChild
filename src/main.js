import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let title = 'DESTINY CHILD - 日服資訊整理'
  if (to.meta.title) {
    title = to.meta.title + ' - ' + title
  }
  document.title = title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
