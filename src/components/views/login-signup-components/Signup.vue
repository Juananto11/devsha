<template lang="pug">
  .container-fluid.w-100.h-100
    .container-form
      form.form-signup(
        role='form',
        @submit.prevent="",
        data-vv-scope="form-signup"
      )
        .row.pt-2
          .col
            .form-group.has-danger.m-0
              label(for='username') Nombre de usuario
              .input-group
                .input-group-addon
                  i
                input#username.form-control(
                  type='text',
                  name='username',
                  placeholder=' Nombre de usuario',
                  v-model.trim="username",
                  autofocus='',
                  v-validate="'required|alpha_num|min:6'"
                )
            .form-control-feedback(v-show="errors.has('form-signup.username')")
              span.text-danger.align-middle
                small {{ errors.first('form-signup.username') }}
            .form-control-feedback(v-show='getErrorUsername')
              span.text-danger.align-middle
                small {{ getErrorUsername }}

        .row
          .col
            .form-group.has-danger.m-0
              label(for='email') Dirección de correo electrónico
              .input-group
                .input-group-addon
                  i
                input#email.form-control(
                  type='email',
                  name='email',
                  placeholder='tu@email.com',
                  v-model.trim="email",
                  v-validate="'required|email'"
                )
            .form-control-feedback(v-show="errors.has('form-signup.email')")
              span.text-danger.align-middle
                small {{ errors.first('form-signup.email') }}
            .form-control-feedback(v-show='getErrorEmail')
              span.text-danger.align-middle
                small {{ getErrorEmail }}

        .row
          .col
            .form-group
              label.mt-2(for='password') Contraseña
              .input-group.mb-2.mt-1
                .input-group-addon
                  i
                .w-100
                  input#password.form-control(
                    type='password',
                    name='password',
                    placeholder='Contraseña',
                    v-model.trim="password",
                    v-validate="'required|min:8'"
                  )
                span.text-danger.align-middle(v-show="errors.has('form-signup.password')")
                  small {{ errors.first('form-signup.password') }}
                .w-100.mt-3
                  input#repeatPass.form-control(
                    type='password',
                    name='repeatPass',
                    v-model.trim="repeatPass",
                    placeholder='Repite la contraseña',
                    v-validate="'required'"
                  )
                span.text-danger.align-middle(v-show="!hideWarning")
                  small Las contraseñas no coinciden

        .row
          .col
            .form-check.mb-2
              label.form-check-label.mt-2
                input.form-check-input(
                  name='terms',
                  type='checkbox',
                  v-validate="'required'",
                  v-model="terms"
                )
                span Acepto&nbsp;
              span.link-terms(@click="showTerms = true") Los terminos y condiciones
              .w-100
                span.text-danger.align-middle(v-show="errors.has('form-signup.terms')")
                  small Debes aceptar los términos y condiciones

        .row.d-flex.justify-content-center.mb-3
          .col-10
            button.mt-2.btn.btn-block.btn-dark(
              type='submit',
              @click="validateForm('form-signup')"
            ) Crear una cuenta
      modal(v-if="showTerms")
          h2(slot="header") TÉRMINOS Y CONDICIONES
          button.btn.btn-dark(
            slot="button"
            @click="showTerms = false"
          ) Cerrar
          span(slot="body")
            p {{ termsCond.p1 }}
            p {{ termsCond.p2 }}
            p {{ termsCond.p3 }}
            p {{ termsCond.p4 }}
            p {{ termsCond.p5 }}
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Modal from './modal-component'
import termsCond from '../../../terms/terms-conditions'

export default {
  components: {
    Modal
  },
  computed: {
    ...mapGetters(['getErrorUsername', 'getErrorEmail', 'getRedirect']),
    hideWarning () {
      if (this.password === this.repeatPass) {
        return true
      } else {
        return false
      }
    },
    sendForm () {
      if (this.result) {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      username: 'Juananto11',
      email: 'juananto11@hotmail.com',
      password: 'aria1703',
      repeatPass: 'aria1703',
      terms: true,
      // terms: false,
      newUser: {},
      termsCond,
      showTerms: null,
      result: null
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    ...mapMutations(['TOGGLE_SPINNER', 'RESET_ERRORS']),
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        this.result = result
        if (result) {
          this.newUser.username = this.username
          this.newUser.email = this.email
          this.newUser.password = this.password
          // this.password = ''
          // this.repeatPass = ''
          // this.username = ''
          // this.email = ''
          // this.terms = false
          // this.showModal = true
          this.TOGGLE_SPINNER(true)
          this.registerUser(this.newUser)
          const timer = setInterval(() => {
            if (this.getRedirect) {
              setTimeout(() => {
                this.$router.push('validate')
              }, 300)
              clearInterval(timer)
            }
          }, 100)
        }
      })
    }
  },
  mounted () {
    this.TOGGLE_SPINNER(false)
  },
  name: 'signup'
}
</script>

<style lang="scss" scoped>
.container-fluid {
  border-right: 1px solid rgb(231, 231, 231);
  border-left: 1px solid rgb(231, 231, 231);
  border-bottom: 1px solid rgb(231, 231, 231);
  width: 400px;
}
.link-terms {
  color: #006fd4;
  cursor: pointer;
}
.link-terms:hover {
  color: #0055a5;
  text-decoration: underline;
}
</style>
