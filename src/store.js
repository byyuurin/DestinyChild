import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const api = {
  login: 'http://www.u030y.lionfree.net/game/DestinyChild/ChildList/api/login',
  portrait:
    'http://www.u030y.lionfree.net/game/DestinyChild/ChildList/api/portrait'
}

export default new Vuex.Store({
  state: {
    characters: [],
    items: [],
    souls: []
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
    ITEM_LOAD() {},
    ITEM_PATCH() {},
    ITEM_DESTROY() {},
    /* soul */
    SOUL_ADD() {},
    SOUL_LOAD() {},
    SOUL_PATCH() {},
    SOUL_DESTROY() {}
  },
  actions: {
    /* character */
    CHARACTER_CREATE(context) {},
    CHARACTER_READ(context) {
      fetch(api.portrait)
        .then(res => res.json())
        .then(data => {
          context.commit('CHARACTER_LOAD', data)
        })
    },
    CHARACTER_UPDATE(context) {},
    CHARACTER_DELETE(context) {},
    /* item */
    ITEM_CREATE() {},
    ITEM_READ() {},
    ITEM_UPDATE() {},
    ITEM_DELETE() {},
    /* soul */
    SOUL_CREATE() {},
    SOUL_READ() {},
    SOUL_UPDATE() {},
    SOUL_DELETE() {}
  }
})
