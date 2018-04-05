<template lang="pug">
  .Friends(@click='dontShowPopovers')
    h2 Tus amigos
    .w-100.d-flex.flex-wrap.justify-content-around
      CardFriend(v-for='i in [1,2,3,4,5,6,7,8,9,10]')
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
.Friends {

}
</style>
