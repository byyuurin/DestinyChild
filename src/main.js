import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// google analytics
const GOOGLE_ANALYTICS_ID = 'UA-132696737-1'
const googleAnalyticsInit = () => {
  const validDomain = /^byyuurin.github.io$/.test(location.host)
  const config = {
    async: true,
    // src: 'https://api.u030y.lionfree.net/async.js'
    src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`,
    onload: function() {
      window.dataLayer = window.dataLayer || []
      window.gtag = () => {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', GOOGLE_ANALYTICS_ID)
    }
  }
  if (validDomain) {
    const head = window.head || document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.async = config.async
    script.src = config.src
    script.charset = 'utf8'
    script.onload = config.onload
    head.appendChild(script)
  }
}
const findDataByIcon = (list = [], icon) => {
  const target = list.filter(it => {
    return it.icon === icon
  })
  return target.length ? target[0] : null
}

Vue.config.productionTip = false

// vue directive
Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  }
})

// update page title.
router.beforeEach((to, from, next) => {
  const { params } = to
  let title = 'DESTINY CHILD - 日服資訊整理'
  if (to.meta.title) {
    title = to.meta.title + ' - ' + title
  }

  if (params && params.icon) {
    if (to.name === 'Library-Reader') {
      const data = findDataByIcon(store.state.characters, params.icon)
      if (data) {
        title = title.replace('{name}', data ? data.name_JP : '')
      }
    }
    if (to.name === 'SoulCarta-Reader') {
      const data = findDataByIcon(store.state.soulCartaList, params.icon)
      if (data) {
        title = title.replace('{name}', data ? data.name_jp : '')
      }
    }
  }
  document.title = title
  next()
})

// send ga data.
router.afterEach((to, from) => {
  if (!window.gtag) {
    googleAnalyticsInit()
  } else {
    window.gtag('config', GOOGLE_ANALYTICS_ID, {
      page_title: document.title,
      page_path: to.fullPath
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
