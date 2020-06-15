import {Login, WhoAmI, LoginOut} from '../services/userServices.js'
export default {
  namespaced: true,
  state: {
    data: null, // 当前登录的用户
    isLoading: false //是否正在远程加载中
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
    // 登录
    async login(context, payload) {
      context.commit("setIsLoading", true)
      let resp = await Login(payload)
      let result = false
      if(resp.code === 0) {
        // 登录成功
        context.commit("setData", resp.data)
        result = true
      }
      context.commit("setIsLoading", false)
      return result
    },
    async whoAmI(context) {
      context.commit("setIsLoading", true)
      let resp = await WhoAmI()
      context.commit("setData", resp)
      context.commit("setIsLoading", false)
    },
    // 退出登录
    loginOut(context) {
      LoginOut()
      context.commit("setData", null)
    }
  }
}
