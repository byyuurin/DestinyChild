import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// google analytics gtag
const GOOGLE_TRACKING_ID = 'UA-132696737-1'
const appendGtagScript = trackId => {
  const config = {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${trackId}`,
    onload() {
      const w = window
      const waitStore = () => {
        const title = document.title
        if (title.indexOf('{name}') < 0) {
          w.dataLayer = w.dataLayer || []
          w.gtag =
            w.gtag ||
            function() {
              w.dataLayer.push(arguments)
            }
          w.gtag('js', new Date())
          w.gtag('config', trackId)
        } else {
          setTimeout(waitStore, 10)
        }
      }
      waitStore()
    }
  }
  let node = window.head || document.getElementsByTagName('head')[0]
  const script = document.createElement('script')
  script.async = config.async
  script.src = config.src
  script.onload = config.onload
  if (!node) node = document.body
  node.appendChild(script)
}

const findDataByIcon = (list = [], icon) => {
  const target = list.filter(it => {
    return it.icon === icon
  })
  return target.length ? target[0] : null
}

Vue.config.productionTip = false

// create vue directive
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
        title = title.replace(
          '{name}',
          data ? `${data.name_CH}(${data.name_JP})` : ''
        )
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
  const { gtag } = window
  const routeGroup = {
    from: from.name ? from.name.split('-')[0] : '',
    to: to.name ? to.name.split('-')[0] : ''
  }
  const isSameGroup = routeGroup.from === routeGroup.to
  const isReaderPage = from.name ? from.name.indexOf('-Reader') >= 0 : false
  if (gtag && !(isReaderPage && isSameGroup)) {
    gtag('config', GOOGLE_TRACKING_ID, {
      page_path: to.fullPath
    })
  }
})

if (/^byyuurin.github.io$/.test(location.host)) {
  appendGtagScript(GOOGLE_TRACKING_ID)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
