import Vue from 'vue'
import Router from 'vue-router'

import Home from './../components/views/Home.vue'
import LoginSignup from './../components/views/Login-signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: LoginSignup }
  ]
})
