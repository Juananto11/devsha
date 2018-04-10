<template lang="pug">
  .Notifications.h-100.d-flex.align-items-center.justify-content-center(@click='toggleNotifications')
    .Notifications-icon
    slot(name='borde')
    .invisible-popover(v-if='showNotifications')
      Popover.pop-notifications
        span.Notifications-icon.d-flex.align-items-center(slot='title') Notificaciones
        ul.pr-3.list-notifications.list-unstyled(slot='body')
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
          li.d-flex.align-items-start
            img.border.rounded-circle.mr-3(src='' height='32' width='32')
            .body-notification
              p.m-0.title-notification USUARIO compartio ALGO
              hr.m-0
              p.m-0.text-notification texto de la notificación
          hr.mt-0.mb-2
</template>

<script>
import Popover from './Popover'

export default {
  components: {
    Popover
  },
  methods: {
    toggleNotifications () {
      this.$emit('toggleNotifications')
    }
  },
  name: 'Notification',
  props: ['showNotifications']
}
</script>

<style lang="scss" scoped>
.Notifications {
  width: 60px;
  cursor: pointer;
  &-icon::before {
    content: '\e7f5';
    font-family: 'icons';
    font-size: 1.5em;
    margin: 0 18px;
  }
}
.visible-popover {
  height: 0px;
}
.invisible-popover {
  position: absolute;
  width: 320px;
  height: 420px;
  right: -10px;
  top: 60px;
  overflow: hidden;
}
.pop-notifications {
  margin: 15px auto 0;
  width: 300px;
  height: 400px;
}
.list-notifications {
  overflow-y: scroll;
  height: 345px;
}
</style>
