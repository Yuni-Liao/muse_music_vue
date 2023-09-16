import { createStore } from 'vuex'

//中央狀態管理區 (網站開關)
export default createStore({
  state: {
    siteLoading: false,

  },
  getters: {
  },
  mutations: {
    updatedSiteLoad(state, value) {
      state.siteLoading = value
    },
  },
  actions: {
  },
  modules: {
  }
})
