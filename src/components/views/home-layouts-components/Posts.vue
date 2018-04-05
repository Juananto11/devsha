<template lang="pug">
  .Posts.d-flex.align-items-start.w-100(@click='dontShowPopovers')
    div.post-container
      CardPost(:toggleMenu='toggleMenu')
      CardPost(:toggleMenu='toggleMenu')
      CardPost(:toggleMenu='toggleMenu')
      CardPost(:toggleMenu='toggleMenu')
      CardPost(:toggleMenu='toggleMenu')
    FriendSuggestion
</template>

<script>
import CardPost from './../home-components/Card-post'
import FriendSuggestion from './../home-components/FriendSuggestion'

export default {
  components: {
    CardPost,
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

</style>
