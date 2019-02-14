import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/signIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component:signIn,

       meta: {auth: true}
    }
  ]
})
