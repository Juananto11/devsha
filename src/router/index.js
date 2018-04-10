import Vue from 'vue'
import Router from 'vue-router'

import Home from './../components/views/Home.vue'
import LoginSignup from './../components/views/Login-signup.vue'
import Login from '../components/views/login-signup-components/Login.vue'
import Signup from '../components/views/login-signup-components/Signup.vue'
import Recovery from '../components/views/login-signup-components/Recovery.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/login',
      component: LoginSignup,
      children: [
        { path: '', name: 'login', component: Login },
        { path: '/signup', name: 'signup', component: Signup },
        { path: '/recovery', name: 'recovery', component: Recovery }
      ]
    }
  ]
})
