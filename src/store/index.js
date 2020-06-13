import Vue from 'vue'
import Vuex from 'vuex'
import channels from './channels.js'
import loginUser from './loginUser.js'
Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    channels,
    loginUser
  }
})

export default store