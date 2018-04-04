<template lang="pug">
  .header.w-100.text-white.bg-dark.m-0.d-flex.justify-content-between
    slot(name='header')
      h5.m-0 Header chat
    slot(name="close")
      span.mr-2 x
</template>
