<template lang="pug">
  .container.pt-2.pt-md-3.pt-lg-5
    header.w-100
      .row.w-100.m-0.d-flex.align-items-center
        .container-img.p-0.col-3.col-md-2.col-lg-1.ml-lg-5
          img.logo.w-100(src="../../assets/images/ds-logo.svg", alt="Logo devsha")
        h1.text-center.m-0.col-6.col-sm-8.col-lg-9 Bienvenido&nbsp;
          span.d-none.d-md-inline-block a devsha
    .row.w-100.m-0.p-0.d-flex.justify-content-center.pt-3
      .w-100.h-100.col-12.col-md-7.col-lg-5.col-xl-4
        .container-nav
          ul.nav.nav-tabs
            li.nav-item.w-50
              router-link(to="/login")
                span.nav-link(:class="{active: toggleClassLogin}", @click="toggleClassL") Iniciar Sesión
            li.nav-item.w-50
              router-link(to="/signup")
                span.nav-link(@click="toggleClassS", :class="{active: toggleClassSignup}") Regístrate
          router-view
</template>

<script>
export default {
  name: 'login-signup',
  data () {
    return {
      toggleClassLogin: null,
      toggleClassSignup: null
    }
  },
  computed: {

  },
  methods: {
    toggleClassL () {
      this.toggleClassLogin = true
      this.toggleClassSignup = false
    },
    toggleClassS () {
      this.toggleClassLogin = false
      this.toggleClassSignup = true
    },
    checkUrl () {
      switch (window.location.pathname) {
        case '/login':
          this.toggleClassLogin = true
          this.toggleClassSignup = false
          break
        case '/signup':
          this.toggleClassLogin = false
          this.toggleClassSignup = true
          break
      }
    }
  },
  created () {
    this.checkUrl()
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  &-nav {
    background-color: #eeeeee;
    box-shadow: 0px 15px 36px -9px rgba(0, 0, 0, 1);
  }
}
a:hover {
  color: #333;
}
.nav-link {
  background-color: #fff;
  color: #333;
  cursor: pointer;
}
.nav-link.active {
  font-weight: bold;
  color: #333;
  background-color: #eeeeee;
  cursor: pointer;
}
</style>
