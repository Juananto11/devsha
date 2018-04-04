<template lang="pug">
.container-fluid.w-100.h-100
  .container-form
    form.form-signup(role='form', @submit.prevent="", data-vv-scope="form-signup")
      .row.pt-2
        .col
          .form-group.has-danger
            label.mt-2(for='username') Nombre de usuario
            .input-group.mb-2.mt-1
              .input-group-addon
                i
              input#username.form-control(type='text', name='username', placeholder=' Nombre de usuario', v-model="newUser.username", autofocus='', v-validate="'required|alpha_num|min:6'")
          .form-control-feedback
            span.text-danger.align-middle(v-show="errors.has('form-signup.username')")
              small {{ errors.first('form-signup.username') }}

      .row
        .col
          .form-group.has-danger
            label.mt-2(for='email') Dirección de correo electrónico
            .input-group.mb-2.mt-1
              .input-group-addon
                i
              input#email.form-control(type='email', name='email', placeholder='tu@email.com', v-model="newUser.email", v-validate="'required|email'")
          .form-control-feedback
            span.text-danger.align-middle(v-show="errors.has('form-signup.email')")
              small {{ errors.first('form-signup.email') }}

      .row
        .col
          .form-group
            label.mt-2(for='password') Contraseña
            .input-group.mb-2.mt-1
              .input-group-addon
                i
              .w-100
                input#password.form-control(type='password', name='password', placeholder='Contraseña', v-model="newUser.password", v-validate="'required|min:8'")
              span.text-danger.align-middle(v-show="errors.has('form-signup.password')")
                small {{ errors.first('form-signup.password') }}
              .w-100.mt-3
                input#repeatPass.form-control(type='password', name='repeatPass', v-model="repeatPass", placeholder='Repite la contraseña', v-validate="'required'")
              span.text-danger.align-middle(v-show="!hideWarning")
                small Las contraseñas no coinciden

      .row
        .col
          .form-check.mb-2
            label.form-check-label.mt-2
              input.form-check-input(name='terms', type='checkbox', v-validate="'required'")
              span Acepto&nbsp;
            span.link-terms(@click="showTerms = true") Los terminos y condiciones
            .w-100
              span.text-danger.align-middle(v-show="errors.has('form-signup.terms')")
                small Debes aceptar los términos y condiciones

      .row.d-flex.justify-content-center.mb-3
        .col-10
          button.mt-2.btn.btn-block.btn-dark(type='submit', @click="validateForm('form-signup')") Crear una cuenta
    modal(v-if="showModal")
      h2(slot="header") ¡Gracias!
      button.btn.btn-dark(slot="button" @click="showModal = false") Cerrar
      span(slot="body")
        p Verifique su cuenta de correo electrónico antes de comenzar
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
import Modal from './modal-component'
import termsCond from '../../../terms/terms-conditions'
// import { mapActions } from 'vuex'

export default {
  name: 'signup',
  components: {
    Modal
  },
  data () {
    return {
      newUser: {
        username: null,
        email: null,
        password: null
      },
      termsCond,
      showTerms: null,
      repeatPass: null,
      term: false,
      showModal: null,
      result: null
    }
  },
  computed: {
    // ...mapState(['user']),
    hideWarning () {
      if (this.newUser.password === this.repeatPass) {
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
  methods: {
    // ...mapActions(['postUser']),
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        this.result = result
        if (result) {
          this.$store.dispatch('postUser', this.newUser)
          setTimeout(() => {
            this.newUser.password = ''
            this.repeatPass = ''
            this.newUser.username = ''
            this.newUser.email = ''
            this.terms = false
            this.showModal = true
          }, 500)
        }
      })
    },
    postForm () {
      if (this.sendForm) {
      }
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
