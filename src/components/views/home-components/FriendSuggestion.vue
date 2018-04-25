<template lang="pug">
  .friend-suggestion.p-3.border Personas que quizas conoscas
    hr.my-2
    ul.list-unstyled
      li.mb-2.d-flex.align-items-center
        img.rounded-circle(src='' width='32' height='32')
        p.ml-3.mb-0 USUARIO
      li.mb-2.d-flex.align-items-center
        img.rounded-circle(src='' width='32' height='32')
        p.ml-3.mb-0 USUARIO
      li.mb-2.d-flex.align-items-center
        img.rounded-circle(src='' width='32' height='32')
        p.ml-3.mb-0 USUARIO
      li.mb-2.d-flex.align-items-center
        img.rounded-circle(src='' width='32' height='32')
        p.ml-3.mb-0 USUARIO
      li.mb-2.d-flex.align-items-center
        img.rounded-circle(src='' width='32' height='32')
        p.ml-3.mb-0 USUARIO
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.findSuggestionsFromFriends()
  },
  methods: {
    ...mapActions(['findSuggestionsFromFriends'])
  },
  name: 'FriendSuggestion'
}
</script>

<style lang="scss" scoped>
.friend-suggestion {
  margin-left: 40px;
  width: 450px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
  position: fixed;
  left: 820px;
}
</style>
