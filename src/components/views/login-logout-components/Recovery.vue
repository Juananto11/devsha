<template lang="pug">
  form.form-horizontal(role='form', method='POST', action='/login')
    .row.pt-4
      .col
        .form-group.has-danger
          label.pt-2.pb-2(for='email') Enter your E-Mail
          .input-group.mb-2.mt-1
            input#email.form-control(type='email', name='email', placeholder='you@example.com', required='', autofocus='')
        .form-control-feedback
    .row.d-flex.justify-content-center.mt-3.mb-5
      .col-10
        button.mt-2.btn.btn-block.btn-dark(type='submit') submit

</template>

<script>
export default {
  name: 'recovery-page'
}
</script>
