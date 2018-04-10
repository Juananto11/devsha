<template lang="pug">
  .Posts.d-flex.align-items-start.w-100(@click='dontShowPopovers')
    div.post-container
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
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
  props: ['showMenu']
}
</script>

<style lang="scss" scoped>

</style>
