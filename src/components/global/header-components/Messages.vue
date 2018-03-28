<template lang="pug">
  .Messages.h-100.d-flex.align-items-center.justify-content-center.border-hover
    span.message-icon
</template>

<script>
export default {
  name: 'Messages'
}
</script>

<style lang="scss" scoped>
.Messages {
  min-width: 60px;
}
.message-icon {
  &::before {
    content: '\e0c9';
  }
}
</style>
