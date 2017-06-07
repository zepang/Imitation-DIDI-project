import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import user from '@/components/user/user'
import taxi from '@/components/taxi/taxi'
import replace from '@/components/replace/replace'
import bus from '@/components/bus/bus'
import travel from '@/components/user/menuPages/travel'
import order from '@/components/order/index'
import accepte from '@/components/order/accepte'
import loader from '@/components/order/loader'
import suggest from '@/components/suggest/suggest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/taxi',
      name: 'home',
      component: home,
      alias:'/' || '/home',
      children: [
        {
          path: 'home/taxi',
          name: 'taxi',
          component: taxi
        },
        {
          path: 'home/replace',
          name: 'repalce',
          component: replace
        },
        {
          path: 'home/bus',
          name: 'bus',
          component: bus
        }
      ]
    },
    {
      path:'/suggest',
      name: 'suggest',
      component: suggest
    },
    {
      path:'/user/:id',
      name:'user',
      component: user,
      children: [
        {
          path: '/user/:id/travel',
          name: 'travel',
          component: travel
        }
      ]
    },
    {
      path:'/order',
      name:'order',
      component: order,
      children: [
        {
          path: '/order/loader',
          name:'loader',
          component: loader
        },
        {
          path: '/order/accepte',
          name:'accepte',
          component: accepte
        }
      ]
    }
  ]
})
