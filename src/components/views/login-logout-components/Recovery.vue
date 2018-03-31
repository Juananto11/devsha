<template lang="pug">
  .container-recovery
    form.form-recovery(role='form', @submit.prevent="validateForm('form-recovery')", data-vv-scope="form-recovery")
      .row.pt-4
        .col
          .form-group.has-danger
            label.pt-2.pb-2(for='email') Enter your E-Mail
            .input-group.mb-2.mt-1
              input#email.form-control(type='email', name='email', placeholder='you@example.com', v-validate="'required|email'", v-model="email", autofocus='')
          .form-control-feedback
            span.text-danger.align-middle(v-show="errors.has('form-recovery.email')")
              small {{ errors.first('form-recovery.email') }}
      .row.d-flex.justify-content-center.mt-3.mb-5
        .col-10
          button.mt-2.btn.btn-block.btn-dark(type='submit') Submit
    modal(v-if="showModal" )
      h2(slot="header") Thank you!
      button.btn.btn-dark(slot="button" @click="showModal = false") Close
      h4(slot="body") Please check your email.
</template>

<script>
import modal from './modal-component'
export default {
  name: 'recovery-page',
  components: {
    modal
  },
  data () {
    return {
      email: null,
      showModal: null
    }
  },
  methods: {
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          console.log(result)
          this.showModal = true
        }
      })
    }
  }
}
</script>
