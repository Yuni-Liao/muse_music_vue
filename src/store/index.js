import { createStore } from 'vuex'

//中央狀態管理
const publicURL = process.env.NODE_ENV === 'development' ? '' : 'https://tibamef2e.com/chd103/g2'
const phpPublicPath = process.env.NODE_ENV === 'development' ? 'http://localhost/muse_music/public/api/' : ''
const publicPath = process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''

export default createStore({
  //類似vue裡面的data
  state: {
    siteLoading: false,
    apiURL: '',
    publicURL: publicURL,
    phpPublicPath: phpPublicPath,
    publicPath: publicPath,
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
