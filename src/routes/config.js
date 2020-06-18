export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: {
        auth: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('@/views/Reg'),
    },
    {
      path: '/channel/:id',
      name: 'channel',
      component: () => import('@/views/ChannelNews'),
      meta: {
        auth: true,
      }
    },
    {
      path: '*',
      component: () => import('@/views/NotFound')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('@/views/Personal'),
      meta: {
        auth: true,
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/Auth')
    }
  ]
}