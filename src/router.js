import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home'
import NewsDetail from './views/NewsDetail/NewsDetail'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/NewsDetail/:id',
      name: 'NewsDetail',
      component: NewsDetail,
			props: true,      
    }
  ]
})
