import Vue from 'vue'
import Router from 'vue-router'

import Home from './../components/views/Home.vue'
import Posts from './../components/views/home-components/Posts.vue'
import Profile from './../components/views/home-components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: Posts
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    { path: '/home', redirect: '/' },
    { path: '/posts', redirect: '/' }
  ]
})
