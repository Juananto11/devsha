<template lang="pug">
  .Posts.d-flex.align-items-start.w-100(@click='dontShowPopovers')
    div.post-container
      Card(:toggleMenu='toggleMenu')
      Card(:toggleMenu='toggleMenu')
      Card(:toggleMenu='toggleMenu')
      Card(:toggleMenu='toggleMenu')
      Card(:toggleMenu='toggleMenu')
    FriendSuggestion
</template>

<script>
import Card from './Card'
import FriendSuggestion from './FriendSuggestion'

export default {
  components: {
    Card,
    FriendSuggestion
  },
  methods: {
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    }
  },
  name: 'Posts',
  props: ['toggleMenu']
}
</script>

<style lang="scss" scoped>
.Posts {
  padding: 20px 20px 0 40px;
}
</style>
