<template lang="pug">
  form.form-signup(role='form', @submit.prevent="validateForm('form-signup')", data-vv-scope="form-signup")
    .row.pt-2
      .col
        .form-group.has-danger
          label.mt-2(for='username') Username
          .input-group.mb-2.mt-1
            .input-group-addon
              i
            input#username.form-control(type='text', name='username', placeholder='username', v-model="username", autofocus='', v-validate="'required|alpha_num|min:6'")
        .form-control-feedback
          span.text-danger.align-middle(v-show="errors.has('form-signup.username')")
            small {{ errors.first('form-signup.username') }}

    .row
      .col
        .form-group.has-danger
          label.mt-2(for='email') E-Mail Address
          .input-group.mb-2.mt-1
            .input-group-addon
              i
            input#email.form-control(type='email', name='email', placeholder='you@example.com', v-model="email", v-validate="'required|email'")
        .form-control-feedback
          span.text-danger.align-middle(v-show="errors.has('form-signup.email')")
            small {{ errors.first('form-signup.email') }}

    .row
      .col
        .form-group
          label.mt-2(for='password') Password
          .input-group.mb-2.mt-1
            .input-group-addon
              i
            .w-100
              input#password.form-control(type='password', name='password', placeholder='Password', v-model="password", v-validate="'required|min:8'")
            span.text-danger.align-middle(v-show="errors.has('form-signup.password')")
              small {{ errors.first('form-signup.password') }}
            .w-100.mt-3
              input#repeatPass.form-control(type='password', name='repeatPass', v-model="repeatPass", placeholder='Repeat Password')
            span.text-danger.align-middle(v-show="!hideWarning")
              small Passwords do not match

    .row
      .col
        .form-check.mb-2
          label.form-check-label.mt-2
            input.form-check-input(name='terms', type='checkbox', v-validate="'required'")
            span I accept&nbsp;
              a(href='#') the terms and conditions
          .w-100
            span.text-danger.align-middle(v-show="errors.has('form-signup.terms')")
              small You must agree to terms and conditions

    .row.d-flex.justify-content-center.mb-3
      .col-10
        button.mt-2.btn.btn-block.btn-dark(type='submit') Create Account
</template>

<script>
export default {
  name: 'signup-page',
  data () {
    return {
      username: null,
      email: null,
      password: null,
      repeatPass: null,
      terms: null
    }
  },
  methods: {
    validateForm (scope) {
      if (this.password !== this.repeatPass) {
        console.log('error')
      }
      this.$validator.validateAll(scope).then((result) => {
        this.password = ''
        this.repeatPass = ''
        if (result) {
          console.log(result)
          // this.$router.push('/home')
        }
      })
    }
  },
  computed: {
    hideWarning () {
      if (this.password === this.repeatPass) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
