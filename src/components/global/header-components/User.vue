<template lang="pug">
  .User
    Popover
      span(slot='title') Usuario
</template>

<script>
import Popover from './Popover'

export default {
  components: {
    Popover
  },
  name: 'User'
}
</script>

<style lang="scss" scoped>

</style>
