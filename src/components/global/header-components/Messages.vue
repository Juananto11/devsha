<template lang="pug">
  .Messages
    Popover
      span(slot='title') Mensajes
</template>

<script>
import Popover from './Popover'

export default {
  components: {
    Popover
  },
  name: 'Messages'
}
</script>

<style lang="scss" scoped>

</style>
