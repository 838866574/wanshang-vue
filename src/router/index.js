import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import teamSearch from '@/components/teamSearch'
import businessField from '@/components/businessField'
import teamSearchList from '@/components/teamSearchList'
import aboutGyls from '@/components/aboutGyls'
import businessFieldTabOne from '@/components/businessFieldTabOne'
import teamSearchDetail from '@/components/teamSearchDetail'
import searchResult from '@/components/searchResult'
import newsList from '@/components/newsList'
import newsDtail from '@/components/newsDtail'
import recruit from '@/components/recruit'
import publication from '@/components/publication'
import aboutRyjx from '@/components/aboutRyjx'
import aboutShzr from '@/components/aboutShzr'
import vtPartner from '@/components/vtPartner'
import contactUs from '@/components/contactUs'

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
    },
    {
      path: '/businessField',
      name: 'businessField',
      component: businessField
    },
    {
      path: '/teamSearchList',
      name: 'teamSearchList',
      component: teamSearchList
    },
    {
      path: '/aboutGyls',
      name: 'aboutGyls',
      component: aboutGyls
    },
    {
      path: '/businessFieldTabOne',
      name: 'businessFieldTabOne',
      component: businessFieldTabOne
    },
    {
      path: '/teamSearchDetail',
      name: 'teamSearchDetail',
      component: teamSearchDetail
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsDtail',
      name: 'newsDtail',
      component: newsDtail
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    },
    {
      path: '/publication',
      name: 'publication',
      component: publication
    },
    {
      path: '/aboutRyjx',
      name: 'aboutRyjx',
      component: aboutRyjx
    },
    {
      path: '/aboutShzr',
      name: 'aboutShzr',
      component: aboutShzr
    },
    {
      path: '/vtPartner',
      name: 'vtPartner',
      component: vtPartner
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }
  ]
})
