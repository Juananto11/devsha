<template lang="pug">
  .User.h-100.d-flex.align-items-center.justify-content-center.border-hover
    .user.d-flex.align-items-center
      img.user-image
      p.user-name.m-0.px-3 Juananto11
      span.user-icon-arrow
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="scss" scoped>
.user {
  &-image {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid green;
  }
  &-icon-arrow {
    &::before {
      content: '\e313'
    }
  }
}
</style>
