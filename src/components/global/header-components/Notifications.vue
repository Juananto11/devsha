<template lang="pug">
  .Notification.h-100.d-flex.align-items-center.justify-content-center.border-hover
    .notification-icon
</template>

<script>
export default {
  name: 'Notification'
}
</script>

<style lang="scss" scoped>
.Notification {
  min-width: 60px;
}
.notification-icon {
  &::before {
    content: '\e7f5'
  }
}
</style>
