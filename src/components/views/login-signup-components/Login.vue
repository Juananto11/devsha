<template lang="pug">
  .container-fluid.w-100.h-100.position-relative
    .position-absolute.text-danger.mt-1(v-if='!getIncorrectLogin.ok')
      span {{ getIncorrectLogin.message}}
    form.form-login(role='form', @submit.prevent="validateForm('form-login')", data-vv-scope="form-login")
      .row.pt-4
        .col
          .form-group.has-danger
            label.mt-2(for='email') E-Mail Address
            .input-group.mb-2.mt-1
              .input-group-addon
                i
              input#email.form-control(type='email', name='email', placeholder='you@example.com', v-model="email", v-validate="'required|email'")
          .form-control-feedback
            span.text-danger.align-middle(v-show="errors.has('form-login.email')")
              small {{ errors.first('form-login.email') }}
      .row
        .col
          .form-group
            label.mt-2(for='password') Contraseña
            .input-group.mb-2.mt-1
              .input-group-addon
                i
              input#password.form-control(type='password', name='password', placeholder='Password', v-model="password", v-validate="'required|min:8'")
          .form-control-feedback
            span.text-danger.align-middle(v-show="errors.has('form-login.password')")
              small {{ errors.first('form-login.password') }}
      .row
        .col
          .form-check.mb-2
            label.form-check-label.mt-2
              input.form-check-input(name='remember', v-model='remember' type='checkbox')
              span Recuérdame
      .row.d-flex.justify-content-center
        .col-10
          button.mt-2.btn.btn-block.btn-dark(
            type='submit'
          ) Iniciar sesión
        router-link(to="/recovery")
          span.btn.btn-link.p-0.mt-2.mb-3
            small ¿Olvidaste tu contraseña?
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getUser', 'getIncorrectLogin'])
  },
  data () {
    return {
      email: 'juananto11@hotmail.com',
      password: 'aria1703',
      remember: true,
      userToLogin: {}
    }
  },
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['TOGGLE_SPINNER', 'DELETE_SESSION']),
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          this.userToLogin.email = this.email
          this.userToLogin.password = this.password
          this.login(this.userToLogin)
          this.TOGGLE_SPINNER(true)
          const timer = setInterval(() => {
            console.log('login-1', this.getUser)
            if (this.getUser.ok) {
              console.log('login-2', this.getUser)
              this.$router.push('/')
              clearInterval(timer)
            }
            if (this.getIncorrectLogin.ok === false) {
              clearInterval(timer)
            }
          }, 500)
        }
      })
    }
  },
  mounted () {
    this.TOGGLE_SPINNER(false)
    this.DELETE_SESSION()
  },
  name: 'login-page'
}
</script>

<style lang="scss" scoped>
.container-fluid {
  border-right: 1px solid rgb(231, 231, 231);
  border-left: 1px solid rgb(231, 231, 231);
  border-bottom: 1px solid rgb(231, 231, 231);
  width: 400px;

  a {
    background-color: #eee;
  }
}
</style>
