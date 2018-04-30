'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import Home from './../components/views/Home.vue'
import Posts from './../components/views/home-layouts-components/Posts.vue'
import Profile from './../components/views/home-layouts-components/Profile.vue'
import Friends from './../components/views/home-layouts-components/Friends.vue'
import LoginSignup from './../components/views/Login-signup.vue'
import Login from '../components/views/login-signup-components/Login.vue'
import Signup from '../components/views/login-signup-components/Signup.vue'
import Recovery from '../components/views/login-signup-components/Recovery.vue'
import ValidateMail from './../components/views/login-signup-components/ValidateMail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          path: '/profile/:id',
          name: 'profile',
          component: Profile
        },
        {
          path: 'friends',
          name: 'friends',
          component: Friends
        }
      ]
    },
    {
      path: '/login',
      component: LoginSignup,
      children: [
        {
          path: '',
          name: 'login',
          component: Login
        },
        {
          path: '/signup',
          name: 'signup',
          component: Signup
        },
        {
          path: '/recovery',
          name: 'recovery',
          component: Recovery
        }
      ]
    },
    {
      path: '/validate',
      name: 'validate',
      component: ValidateMail
    },
    {
      path: '/validate/:id',
      name: 'validateId',
      component: ValidateMail
    },
    {
      path: '/posts',
      redirect: '/'
    }
  ]
})
