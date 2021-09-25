import Vue from 'vue'
import Router from 'vue-router'
import Skill from '../src/views/skill'
import Home from '../src/views/home'
import Works from '../src/views/works'
import Etc from '../src/views/etc'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/skill',
      name: 'skill',
      component:Skill
    },
    {
      path: '/works',
      name: 'works',
      component:Works
    },
    {
      path: '/etc',
      name: 'etc',
      component:Etc
    }
  ]
})