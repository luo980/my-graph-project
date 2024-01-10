import { createStore } from 'vuex'

export default createStore({
  state: {
    fileData: null
  },
  mutations: {
    setFileData(state, data) {
      state.fileData = data
    }
  }
})
