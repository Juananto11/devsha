<template lang="pug">
  .Notification
    Popover.pop-notifications
      span.notification-icon(slot='title') Notificaciones
      ul.list-notifications.list-unstyled(slot='body')
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
  name: 'Notification'
}
</script>

<style lang="scss" scoped>
.notification-icon::before {
  content: '\e7f5';
  font-family: 'icons';
  margin: 0 1em;
}
.pop-notifications {
  width: 350px;
  height: 300px;
}
.list-notifications {
  height: 255px;
  overflow-y: scroll;
}
</style>
