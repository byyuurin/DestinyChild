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
    characters: [],
    items: [],
    soulCartaList: []
  },
  mutations: {
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
