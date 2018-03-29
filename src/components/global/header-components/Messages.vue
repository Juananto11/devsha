<template lang="pug">
  .Messages
    Popover.pop-messages
      span.message-icon.d-flex.align-items-center(slot='title') Mensajes
      ul.list-messages.list-unstyled(slot='body')
        li.pb-2.d-flex.align-items-center
          img.border.rounded-circle.mr-3(src='' height='32' width='32')
          p.m-0.title-message Tienes un mensaje de USUARIO
        li.pb-2.d-flex.align-items-center
          img.border.rounded-circle.mr-3(src='' height='32' width='32')
          p.m-0.title-message Tienes un mensaje de USUARIO
        li.pb-2.d-flex.align-items-center
          img.border.rounded-circle.mr-3(src='' height='32' width='32')
          p.m-0.title-message Tienes un mensaje de USUARIO
        li.pb-2.d-flex.align-items-center
          img.border.rounded-circle.mr-3(src='' height='32' width='32')
          p.m-0.title-message Tienes un mensaje de USUARIO
        li.pb-2.d-flex.align-items-center
          img.border.rounded-circle.mr-3(src='' height='32' width='32')
          p.m-0.title-message Tienes un mensaje de USUARIO
</template>

<script>
import Popover from './Popover'

export default {
  components: {
    Popover
  },
  name: 'Messages'
}
</script>

<style lang="scss" scoped>
.message-icon::before {
  content: '\e0c9';
  font-family: 'icons';
  margin: 0 1em;
}
.pop-messages {
  width: 350px;
  height: 300px;
}
.list-messages {
  height: 255px;
  overflow-y: scroll;
}
</style>
