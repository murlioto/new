import Vue from 'vue'
import App from './App.vue'
import './assets/style/resetCss.css'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

// 频道数据一开始就要触发
store.dispatch("channels/fetchDatas")
store.dispatch('loginUser/whoAmI')

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
