<template lang="pug">
  .container.pt-2.pt-md-3.pt-lg-5
    header.w-100
      .row.w-100.m-0.d-flex.align-items-center
        .container-img.p-0.col-3.col-md-2.col-lg-1.ml-lg-5
          img.logo.w-100(src="../../assets/images/logo.png", alt="Logo devsha")
        h1.text-center.m-0.col-6.col-sm-8.col-lg-9 Bienvenido&nbsp;
          span.d-none.d-md-inline-block a devsha
    .row.w-100.m-0.p-0.d-flex.justify-content-center.pt-3
      .w-100.h-100.col-12.col-md-7.col-lg-5.col-xl-4
        .container-nav
          ul.nav.nav-tabs
            li.nav-item.w-50
              span#login.nav-link.inactive(v-on:click="changeForm('login')", :class="{active: showLogin}") Iniciar Sesión
            li.nav-item.w-50
              span#signup.nav-link.inactive(v-on:click="changeForm('signup')", :class="{active: showSignup}") Regístrate
          .container-fluid.w-100.h-100( v-if="showLogin")
            login.login
              span.btn.btn-link.p-0.mt-2.mb-3(v-on:click="changeForm('recovery')")
                small ¿Olvidaste tu contraseña?
          .container-fluid.w-100.h-100(v-if="showSignup")
            signup.signup
              span.link-terms(slot="terms", @click="showTerms = true") Los terminos y condiciones
          .container-fluid.w-100.h-100(v-if="showRecovery")
            recovery.recovery
    modal(v-if="showTerms")
      h2(slot="header") TÉRMINOS Y CONDICIONES
      button.btn.btn-dark(slot="button" @click="showTerms = false") Cerrar
      span(slot="body")
        p {{ termsCond.p1 }}
        p {{ termsCond.p2 }}
        p {{ termsCond.p3 }}
        p {{ termsCond.p4 }}
        p {{ termsCond.p5 }}
</template>

<script>
import Login from './login-logout-components/Login'
import Signup from './login-logout-components/Signup'
import Recovery from './login-logout-components/Recovery'
import Modal from './login-logout-components/modal-component'
import termsCond from '../../terms/terms-conditions'

export default {
  name: 'login-signup',
  components: {
    Login,
    Signup,
    Recovery,
    Modal
  },
  data () {
    return {
      termsCond,
      showLogin: true,
      showSignup: false,
      showRecovery: false,
      showTerms: false
    }
  },
  methods: {
    changeForm (param) {
      switch (param) {
        case 'login':
          this.showLogin = true
          this.showSignup = false
          this.showRecovery = false
          break
        case 'signup':
          this.showLogin = false
          this.showSignup = true
          this.showRecovery = false
          break
        case 'recovery':
          this.showLogin = false
          this.showSignup = false
          this.showRecovery = true
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.appear-enter-active,
.appear-leave-active {
  transition: opacity 2s;
}
.appear-enter,
.appear-leave-to {
  opacity: 0;
}
.container {
  height: 100vh;
  width: 100vw;
  .container-nav {
    background-color: #eeeeee;
    box-shadow: 0px 15px 36px -9px rgba(0, 0, 0, 1);
    .inactive {
      background-color: #fff;
      cursor: pointer;
    }
    .active {
      font-weight: bold;
      background-color: #eeeeee;
      cursor: pointer;
    }
    .container-fluid {
      border-right: 1px solid rgb(231, 231, 231);
      border-left: 1px solid rgb(231, 231, 231);
      border-bottom: 1px solid rgb(231, 231, 231);
      width: 400px;
      .link-terms {
        color: #006fd4;
        cursor: pointer;
      }
      .link-terms:hover {
        color: #0055a5;
        text-decoration: underline;
      }
    }
  }
}
</style>
