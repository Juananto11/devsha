<template lang="pug">
  .container.pt-2.pt-md-3.pt-lg-5
    h1.text-center.mb-3 Welcome
    .row.w-100.m-0.p-0.d-flex.justify-content-center.pt-3
      .w-100.h-100.col-12.col-md-7.col-lg-5.col-xl-4
        .container-nav
          ul.nav.nav-tabs
            li.nav-item.w-50
              a#login.nav-link.active(v-on:click="changeLogin") Login
            li.nav-item.w-50
              a#signup.nav-link(v-on:click="changeSignup") Signup
          .container-fluid.w-100.h-100( v-if="showLogin")
            login.login
              a.btn.btn-link.p-0.mt-2.mb-3(href='#', v-on:click="changeRecovery")
                small Forgot Your Password?
          .container-fluid.w-100.h-100(v-if="showSignup")
            signup.signup
          .container-fluid.w-100.h-100(v-if="showRecovery")
            recovery.recovery
</template>

<script>
import Login from './login-logout-components/Login'
import Signup from './login-logout-components/Signup'
import Recovery from './login-logout-components/Recovery'

export default {
  name: 'login-signup',
  components: {
    Login,
    Signup,
    Recovery
  },
  data () {
    return {
      showLogin: true,
      showSignup: false,
      showRecovery: false
    }
  },
  methods: {
    changeLogin () {
      document.querySelector('#login').className = 'nav-link active'
      document.querySelector('#signup').className = 'nav-link'

      this.showLogin ? this.showLogin = true : this.showLogin = true
      this.showSignup ? this.showSignup = false : this.showSignup = false
      this.showRecovery ? this.showRecovery = false : this.showRecovery = false

      return (
        this.showSignup,
        this.showLogin,
        this.showRecovery
      )
    },
    changeSignup () {
      document.querySelector('#login').className = 'nav-link'
      document.querySelector('#signup').className = 'nav-link active'

      this.showSignup ? this.showSignup = true : this.showSignup = true
      this.showLogin ? this.showLogin = false : this.showLogin = false
      this.showRecovery ? this.showRecovery = false : this.showRecovery = false

      return (
        this.showSignup,
        this.showLogin,
        this.showRecovery
      )
    },
    changeRecovery () {
      document.querySelector('#login').className = 'nav-link'
      document.querySelector('#signup').className = 'nav-link'

      this.showRecovery ? this.showRecovery = true : this.showRecovery = true
      this.showSignup ? this.showSignup = false : this.showSignup = false
      this.showLogin ? this.showLogin = false : this.showLogin = false

      return (
        this.showSignup,
        this.showLogin,
        this.showRecovery
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;

  .active {
    font-weight: bold;
  }

  .container-nav {
    .container-fluid {
      border-right: 1px solid rgb(231, 231, 231);
      border-left: 1px solid rgb(231, 231, 231);
      border-bottom: 1px solid rgb(231, 231, 231);
      width: 400px;
    }
  }
}
</style>
