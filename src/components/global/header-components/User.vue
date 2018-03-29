<template lang="pug">
  .User
    Popover.pop-user
      span.d-flex.align-items-center.mx-3(slot='title')
        img.border.rounded-circle.mr-3(src='' height='20' width='20')
        | Usuario
      ul.list-unstyled(slot='body')
        li.d-flex.align-items-center
          span.mr-3.account
          p.m-0 Ver perfil
        li.d-flex.align-items-center
          span.mr-3.exit
          p.m-0 Cerrar Sesión
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
.pop-user {
  width: 170px;
  height: 100px;
}
.account::before {
  content: '\e853';
  font-family: 'icons';
  font-size: 1.2em;
}
.exit::before {
  content: '\e8ac';
  font-family: 'icons';
  font-size: 1.2em;
}
</style>
