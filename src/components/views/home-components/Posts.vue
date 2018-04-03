<template lang="pug">
  .Posts.d-flex.align-items-start.w-100
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
  name: 'Posts',
  props: ['toggleMenu']
}
</script>

<style lang="scss" scoped>

</style>
