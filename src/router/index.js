import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import teamSearch from '@/components/teamSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/teamSearch',
      name: 'teamSearch',
      component: teamSearch
    }
  ]
})
