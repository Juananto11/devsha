<template lang="pug">
.container-fluid.w-100.h-100
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
            input.form-check-input(name='remember', type='checkbox')
            span Recuérdame
    .row.d-flex.justify-content-center
      .col-10
        button.mt-2.btn.btn-block.btn-dark(type='submit') Iniciar sesión
      router-link(to="/recovery")
        span.btn.btn-link.p-0.mt-2.mb-3
          small ¿Olvidaste tu contraseña?
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      email: null,
      password: null,
      remember: null
    }
  },
  methods: {
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        this.password = ''
        if (result) {
          this.$router.push('/home')
        }
      })
    }
  }
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
