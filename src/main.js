import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const head = document.head || document.getElementsByTagName('head')[0]
    const script = document.createElement('script')

    script.src = src
    script.async = true
    script.charset = 'utf8'
    script.onload = resolve
    script.onerror = reject

    head.appendChild(script)
  })
}

function loadTrackScript(trackId) {
  const src = `https://www.googletagmanager.com/gtag/js?id=${trackId}`
  return loadScript(src)
}

function isTemplateTitle() {
  const { title } = document
  const templateText = ['{name}']

  return templateText.filter(text => {
    return title.indexOf(text) >= 0
  }).length
}

function waitTracking(trackId, pathname = '/') {
  const { gtag } = window

  if (!gtag) return false

  if (isTemplateTitle()) {
    return setTimeout(() => waitTracking(trackId, pathname), 10)
  }

  gtag('config', trackId, {
    page_path: pathname
  })
  // console.log('[%s] [%s]\ntracking done.', pathname, document.title)

  return true
}

const GOOGLE_TRACKING_ID = 'UA-132696737-1'
if (/^byyuurin.github.io$/.test(location.host)) {
  loadTrackScript(GOOGLE_TRACKING_ID).then(() => {
    const w = window

    w.dataLayer = w.dataLayer || []
    w.gtag =
      w.gtag ||
      function() {
        w.dataLayer.push(arguments)
      }

    w.gtag('js', new Date())
  })
}

Vue.config.productionTip = false

// create vue directive
Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  const { meta } = to
  const routeGroup = {
    from: from.name ? from.name.split('-')[0] : '',
    to: to.name ? to.name.split('-')[0] : ''
  }
  const isSameGroup = routeGroup.from === routeGroup.to
  const fromReaderPage = from.name ? from.name.indexOf('-Reader') >= 0 : false
  const tryTracking = () => {
    if (!waitTracking(GOOGLE_TRACKING_ID, to.fullPath)) {
      return setTimeout(tryTracking, 10)
    }
  }
  const checkGroupConfig = (reCheckTimes = 0) => {
    const { groupConfig } = store.state
    const toReaderPage = to.name ? to.name.indexOf('-Reader') >= 0 : false
    const groupConfigReady = Object.keys(groupConfig).length

    if (!groupConfigReady && isTemplateTitle()) {
      return setTimeout(checkGroupConfig, 10)
    }

    if (groupConfigReady && toReaderPage && isTemplateTitle()) {
      if (reCheckTimes < 3) {
        return setTimeout(() => checkGroupConfig(++reCheckTimes), 10)
      } else {
        return router.replace({
          path: from.path
        })
      }
    }

    if (!(fromReaderPage && isSameGroup)) {
      // send tracking.
      tryTracking()
    }
  }
  let title = 'DESTINY CHILD - 日服資訊整理'

  if (meta.title) {
    title = meta.title + ' - ' + title
  }

  document.title = title

  checkGroupConfig()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
