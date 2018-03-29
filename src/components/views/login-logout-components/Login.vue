<template lang="pug">
  form.form-horizontal(role='form', method='POST', action='/login')
    .row.pt-4
      .col
        .form-group.has-danger
          label.mt-2(for='email') E-Mail Address
          .input-group.mb-2.mt-1
            .input-group-addon
              i
            input#email.form-control(type='email', name='email', placeholder='you@example.com', required='', autofocus='')
        .form-control-feedback
          span.text-danger.align-middle
            i
    .row
      .col
        .form-group
          label.mt-2(for='password') Password
          .input-group.mb-2.mt-1
            .input-group-addon
              i
            input#password.form-control(type='password', name='password', placeholder='Password', required='')
        .form-control-feedback
          span.text-danger.align-middle
            i
    .row
      .col
        .form-check.mb-2
          label.form-check-label.mt-2
            input.form-check-input(name='remember', type='checkbox')
            span Remember me
    .row.d-flex.justify-content-center
      .col-10
        button.mt-2.btn.btn-block.btn-dark(type='submit') Login
      slot

</template>

<script>
export default {
  name: 'login-page'
}
</script>
