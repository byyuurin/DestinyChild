import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = {
  data: '/DestinyChild/api/data.json',
  character: '/DestinyChild/api/character',
  item: '/DestinyChild/api/item',
  soulCarta: '/DestinyChild/api/soulCarta'
}

const jsonRequest = function(method, data) {
  return {
    body: JSON.stringify(data),
    method: method,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
}
const jsonPost = function(data) {
  return jsonRequest('POST', data)
}
const jsonPatch = function(data) {
  return jsonRequest('PATCH', data)
}

export default new Vuex.Store({
  state: {
    groupConfig: {},
    characters: [],
    items: [],
    soulCartaList: [],
    editorEnabled: /^http:\/\/(localhost|127.0.0.1)/.test(location.href)
  },
  mutations: {
    /* groupConfig */
    GROUP_CONFIG_CREATE(state, data) {},
    GROUP_CONFIG_READ(state, data) {
      state.groupConfig = data
    },
    GROUP_CONFIG_UPDATE(state, data) {},
    GROUP_CONFIG_DELETE(state, data) {},

    /* character */
    CHARACTER_CREATE(state, data) {
      state.characters.push(data)
    },
    CHARACTER_READ(state, data) {
      state.characters = data
    },
    CHARACTER_UPDATE(state, { data, index }) {
      state.characters[index] = data
    },
    CHARACTER_DELETE(state, data) {},

    /* item */
    ITEM_CREATE(state, data) {},
    ITEM_READ(state, data) {
      state.items = data
    },
    ITEM_UPDATE(state, { data, index }) {},
    ITEM_DELETE(state, data) {},

    /* soul */
    SOUL_CARTA_CREATE(state, data) {
      state.soulCartaList.push(data)
    },
    SOUL_CARTA_READ(state, data) {
      state.soulCartaList = data
    },
    SOUL_CARTA_UPDATE(state, { data, index }) {
      state.soulCartaList[index] = data
    },
    SOUL_CARTA_DELETE(state, data) {}
  },
  actions: {
    /* all */
    APP_INIT(context) {
      fetch(api.data)
        .then(res => res.json())
        .then(data => {
          context.commit('GROUP_CONFIG_READ', data.groupConfig || {})
          context.commit('CHARACTER_READ', data.character || [])
          context.commit('ITEM_READ', data.item || [])
          context.commit('SOUL_CARTA_READ', data.soulCarta || [])
        })
    },

    /* groupConfig */
    GROUP_CONFIG_CREATE(context) {},
    GROUP_CONFIG_READ(context) {
      fetch(api.data)
        .then(res => res.json())
        .then(data => {
          context.commit('GROUP_CONFIG_READ', data.groupConfig || {})
        })
    },
    GROUP_CONFIG_UPDATE(context) {},
    GROUP_CONFIG_DELETE(context) {},

    /* character */
    CHARACTER_CREATE(context, formData) {
      delete formData.id

      fetch(api.character, jsonPost(formData))
        .then(res => {
          return res.json()
        })
        .then(data => {
          context.commit('CHARACTER_CREATE', data)
        })
    },
    CHARACTER_READ(context) {
      fetch(api.character)
        .then(res => res.json())
        .then(data => {
          context.commit('CHARACTER_READ', data || [])
        })
    },
    CHARACTER_UPDATE(context, formData) {
      const { id } = formData
      const target = context.state.characters.filter(it => {
        return it.id === id
      })[0]
      const storeIndex = context.state.characters.indexOf(target)

      if (storeIndex < 0) return false

      fetch(`${api.character}/${id}`, jsonPatch(formData))
        .then(res => {
          return res.json()
        })
        .then(data => {
          context.commit('CHARACTER_UPDATE', { data, storeIndex })
        })
    },
    CHARACTER_DELETE(context) {},

    /* item */
    ITEM_CREATE(context) {},
    ITEM_READ(context) {
      fetch(api.item)
        .then(res => res.json())
        .then(data => {
          context.commit('ITEM_READ', data || [])
        })
    },
    ITEM_UPDATE(context) {},
    ITEM_DELETE(context) {},

    /* soul */
    SOUL_CARTA_CREATE(context, formData) {
      delete formData.id

      fetch(api.soulCarta, jsonPost(formData))
        .then(res => {
          return res.json()
        })
        .then(data => {
          context.commit('SOUL_CARTA_CREATE', data)
        })
    },
    SOUL_CARTA_READ(context) {
      fetch(api.soulCarta)
        .then(res => res.json())
        .then(data => {
          context.commit('SOUL_CARTA_READ', data || [])
        })
    },
    SOUL_CARTA_UPDATE(context, formData) {
      const { id } = formData
      const target = context.state.soulCartaList.filter(it => {
        return it.id === id
      })[0]
      const storeIndex = context.state.soulCartaList.indexOf(target)

      if (storeIndex < 0) return false

      fetch(`${api.soulCarta}/${id}`, jsonPatch(formData))
        .then(res => {
          return res.json()
        })
        .then(data => {
          context.commit('SOUL_CARTA_UPDATE', { data, storeIndex })
        })
    },
    SOUL_CARTA_DELETE(context) {}
  }
})
