import Vue from 'vue'
import App from './App.vue'
import './assets/style/resetCss.css'
import router from './routes'
// import { getNews } from './services/newsServices'



Vue.config.productionTip = false

// 使用getNewsChannels获取新闻类别
// async function test () {
//   let resp = await getNewsChannels();
//   console.log(resp)
// }
// test()


// async function test() {
//   let resp = await getNews("5572a108b3cdc86cf39001cd")
//   console.log(resp)
// }

// test()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
