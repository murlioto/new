import Vue from 'vue'
import VueRouter from 'vue-router'
import config from './config.js'
import store from '../store/index.js'
Vue.use(VueRouter)

var router = new VueRouter(config)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

router.beforeEach(function(to, from, next){
  if(to.meta.auth) {
    // 需要登录才能访问
    if(store.state.loginUser.isLoading) {
      next({name:'auth'})
    }else if(store.state.loginUser.data) {
      next() // 允许进入
    }else {
      next({name:'login'})
    }
  }else {
    // 都可以访问
    next()
  }
})

export default router