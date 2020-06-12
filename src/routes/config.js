export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('@/views/Reg')
    },
    {
      path: '/channel/:id',
      name: 'channel',
      component: () => import('@/views/ChannelNews')
    },
    {
      path: '*',
      component: () => import('@/views/NotFound')
    }
  ]
}