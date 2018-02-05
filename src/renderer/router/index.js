import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Router)

Vue.use(Element, {
  size: 'medium'
})

// import LandingPage from '@/components/LandingPage'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/side',
      component: require('@/components/LandingPage').default,
      children: [{
        path: 'evidence',
        component: require('..//views//evidence//index').default
      },
      {
        path: 'test',
        component: require('..//views//test//test').default
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
