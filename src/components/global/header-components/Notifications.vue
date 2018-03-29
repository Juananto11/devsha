<template lang="pug">
  .Notification
    Popover
      span(slot='title') Notificaciones
</template>

<script>
import Popover from './Popover'

export default {
  components: {
    Popover
  },
  name: 'Notification'
}
</script>

<style lang="scss" scoped>

</style>
