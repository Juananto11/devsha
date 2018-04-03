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
export default {
  name: 'FriendSuggestion'
}
</script>

<style lang="scss" scoped>
.friend-suggestion {
  margin-left: 40px;
  width: 450px;
  border-radius: 10px;
  background-color: rgb(155, 39, 39);
  position: fixed;
  left: 820px;
}
</style>
