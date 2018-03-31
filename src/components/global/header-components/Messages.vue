<template lang="pug">
  .Messages.h-100.d-flex.align-items-center.justify-content-center(@click='visibleMessages')
    span.Messages-icon
    slot(name='borde')
    .invisible-popover(v-if='showMessages')
      Popover.pop-messages
        span.Messages-icon.d-flex.align-items-center(slot='title') Mensajes
        ul.pr-3.list-messages.list-unstyled(slot='body')
          li.d-flex.align-items-center
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            p.m-0.title-message Tienes un mensaje de USUARIO
          hr.m-1
          li.d-flex.align-items-center
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            p.m-0.title-message Tienes un mensaje de USUARIO
          hr.m-1
          li.d-flex.align-items-center
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            p.m-0.title-message Tienes un mensaje de USUARIO
          hr.m-1
          li.d-flex.align-items-center
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            p.m-0.title-message Tienes un mensaje de USUARIO
          hr.m-1
          li.d-flex.align-items-center
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            p.m-0.title-message Tienes un mensaje de USUARIO
          hr.m-1
</template>

<script>
import Popover from './Popover'

export default {
  components: {
    Popover
  },
  methods: {
    visibleMessages () {
      this.$emit('visibleMessages')
    }
  },
  name: 'Messages',
  props: ['showMessages']
}
</script>

<style lang="scss" scoped>
.Messages {
  width: 60px;
  &-icon {
    &::before {
      content: '\e0c9';
      font-family: 'icons';
      font-size: 1.5em;
      margin: 0 18px;
    }
  }
}
.visible-popover {
  height: 0px;
}
.invisible-popover {
  position: absolute;
  width: 370px;
  height: 270px;
  right: -10px;
  top: 60px;
  overflow: hidden;
}
.pop-messages {
  margin: 15px auto 0;
  width: 350px;
  height: 250px;
}
.list-messages {
  overflow-y: scroll;
  height: 195px;
}
</style>
