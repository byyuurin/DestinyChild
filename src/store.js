import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const api = {
  data: './api/data.json',
  portrait: './api/portrait',
  item: './api/item',
  soulCarta: './api/soulCarta'
}

export default new Vuex.Store({
  state: {
    groupInfo: {},
    characters: [],
    items: [],
    soulCartaList: []
  },
  mutations: {
    /* groupInfo */
    GROUP_INFO_ADD(state, data) {},
    GROUP_INFO_LOAD(state, data) {
      state.groupInfo = data
    },
    GROUP_INFO_PATCH(state, data) {},
    GROUP_INFO_DESTROY(state, data) {},
    /* character */
    CHARACTER_ADD() {},
    CHARACTER_LOAD(state, data) {
      state.characters = data
    },
    CHARACTER_PATCH() {},
    CHARACTER_DESTROY() {},
    /* item */
    ITEM_ADD() {},
    ITEM_LOAD(state, data) {
      state.items = data
    },
    ITEM_PATCH() {},
    ITEM_DESTROY() {},
    /* soul */
    SOUL_CARTA_ADD() {},
    SOUL_CARTA_LOAD(state, data) {
      state.soulCartaList = data
    },
    SOUL_CARTA_PATCH() {},
    SOUL_CARTA_DESTROY() {}
  },
  actions: {
    /* all */
    APP_INIT(context) {
      fetch(api.data)
        .then(res => res.json())
        .then(data => {
          context.commit('GROUP_INFO_LOAD', data.groupInfo || {})
          context.commit('CHARACTER_LOAD', data.character || [])
          context.commit('ITEM_LOAD', data.item || [])
          context.commit('SOUL_CARTA_LOAD', data.soulCarta || [])
        })
    },
    /* groupInfo */
    GROUP_INFO_CREATE(context) {},
    GROUP_INFO_READ(context) {
      fetch(api.data)
        .then(res => res.json())
        .then(data => {
          context.commit('GROUP_INFO_LOAD', data.groupInfo || {})
        })
    },
    GROUP_INFO_UPDATE(context) {},
    GROUP_INFO_DELETE(context) {},
    /* character */
    CHARACTER_CREATE(context) {},
    CHARACTER_READ(context) {
      fetch(api.data)
        .then(res => res.json())
        .then(data => {
          context.commit('CHARACTER_LOAD', data.character || [])
        })
    },
    CHARACTER_UPDATE(context) {},
    CHARACTER_DELETE(context) {},
    /* item */
    ITEM_CREATE() {},
    ITEM_READ(context) {
      fetch(api.data)
        .then(res => res.json())
        .then(data => {
          context.commit('ITEM_LOAD', data.item || [])
        })
    },
    ITEM_UPDATE() {},
    ITEM_DELETE() {},
    /* soul */
    SOUL_CARTA_CREATE() {},
    SOUL_CARTA_READ(context) {
      fetch(api.data)
        .then(res => res.json())
        .then(data => {
          context.commit('SOUL_CARTA_LOAD', data.soulCarta || [])
        })
    },
    SOUL_CARTA_UPDATE() {},
    SOUL_CARTA_DELETE() {}
  }
})
