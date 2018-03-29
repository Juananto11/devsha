<template lang="pug">
  form.form-horizontal(role='form', method='POST', action='/login')
    .row.pt-2
      .col
        .form-group.has-danger
          label.mt-2(for='username') Username
          .input-group.mb-2.mt-1
            .input-group-addon
              i
            input#username.form-control(type='text', name='username', placeholder='username', required='', autofocus='')
        .form-control-feedback
          span.text-danger.align-middle
            i
    .row
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
            .w-100
              input#password.form-control(type='password', name='password', placeholder='Password', required='')
            .w-100.mt-3
              input#repeat-password.form-control(type='password', name='repeat-password', placeholder='Repeat Password', required='')
        .form-control-feedback
          span.text-danger.align-middle
            i
    .row
      .col
        .form-check.mb-2
          label.form-check-label.mt-2
            input.form-check-input(name='remember', type='checkbox')
            span I accept&nbsp;
              a(href='#') the terms and conditions
    .row.d-flex.justify-content-center.mb-3
      .col-10
        button.mt-2.btn.btn-block.btn-dark(type='submit') Create Account
</template>

<script>
export default {
  name: 'signup-page'
}
</script>
