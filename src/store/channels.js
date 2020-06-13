import {getNewsChannels} from '../services/newsServices.js'
export default {
  namespaced: true,
  state: {
    data: [],
    isLoading: false
  },
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchDatas(context) {
      // 设置loading为true
      context.commit("setIsLoading",true)
      // 请求数据
      let resp = await getNewsChannels()
      // 设置data
      context.commit("setData",resp.channelList)
      // 请求设置完成后关闭isloading
      context.commit("setIsLoading",false)
    }
  }
}