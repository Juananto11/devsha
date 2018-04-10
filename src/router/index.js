'use strict';

import Vue from 'vue'
import Router from 'vue-router'

import Home from './../components/views/Home.vue'
import Posts from './../components/views/home-layouts-components/Posts.vue'
import Profile from './../components/views/home-layouts-components/Profile.vue'
import ProfileFriend from './../components/views/home-layouts-components/ProfileFriend.vue'
import Friends from './../components/views/home-layouts-components/Friends.vue'

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
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/profile/:id',
          name: 'profileFriend',
          component: ProfileFriend
        },
        {
          path: 'friends',
          name: 'friends',
          component: Friends
        }
      ]
    },
    { path: '/home', redirect: '/' },
    { path: '/posts', redirect: '/' }
  ]
})
