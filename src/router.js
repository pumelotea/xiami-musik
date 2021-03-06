import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/main'),
      children:[
        {
          path: '/find-music',
          name: 'find-music',
          component: () => import('@/views/find-music'),
        },
        {
          path: '/music-list',
          name: 'music-list',
          component: () => import('@/views/music-list'),
        },
        {
          path: '/billboard',
          name: 'billboard',
          component: () => import('@/views/billboard'),
        }
      ]
    }
  ]
})
