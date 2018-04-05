<template lang="pug">
  .Friends(@click='dontShowPopovers')
    h2 Tus amigos
    .w-100.d-flex.flex-wrap.justify-content-around
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
      CardFriend
</template>

<script>
import CardFriend from './../home-components/Card-friend'

export default {
  components: {
    CardFriend
  },
  methods: {
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    }
  },
  name: 'Friends'
}
</script>

<style lang="scss" scoped>

</style>
