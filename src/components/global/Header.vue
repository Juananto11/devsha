<template lang="pug">
  .Header.w-100.d-flex.align-items-center.justify-content-between.fixed-top
    .d-flex.h-100.w-75(@click='dontShowPopovers')
      .logo.h-100.px-3.d-inline-flex.align-items-center.justify-content-center
        img.logo-img(src='./../../assets/images/ds-logo.svg')
        h1.m-0 devsha
        .borde
      .toggle-lateral-bar.h-100.d-flex.align-items-center.justify-content-center(@click='visible')
        span.icon-menu-dots.d-block.rounded(:class='{"large": !toggleMenu}')
        .borde
      .search.h-100.w-50.d-flex.justify-content-center.align-items-center
        label.search-icon.m-0
        input.search-input.border-0.p-2.w-100(type='text' placeholder="Buscar")
        .borde
    .d-flex.h-100
      Messages.messages(:showMessages='showMessages' @visibleMessages='visibleMessages')
        .borde(slot="borde")
      Notifications.notifications(:showNotifications='showNotifications' @visibleNotifications='visibleNotifications')
        .borde(slot="borde")
      User.user(:showUser='showUser' @visibleUser='visibleUser')
        .borde(slot="borde")

</template>

<script>
import Messages from './header-components/Messages'
import Notifications from './header-components/Notifications'
import User from './header-components/User'

export default {
  components: {
    Messages,
    Notifications,
    User
  },
  methods: {
    visible () {
      this.$emit('visible')
    },
    visibleMessages () {
      this.$emit('visibleMessages')
    },
    visibleNotifications () {
      this.$emit('visibleNotifications')
    },
    visibleUser () {
      this.$emit('visibleUser')
    },
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    }
  },
  name: 'Header',
  props: [
    'toggleMenu',
    'showMessages',
    'showNotifications',
    'showUser'
  ]
}
</script>

<style lang="scss" scoped>
.Header {
  height: 60px;
  box-shadow: 1px 1px 5px rgba($color: #000, $alpha: .5);
}
.cover {
  background-color: rgba(0, 0, 0, 0.432);
  position: absolute;
  top: 0;
  left: 0;
}
.logo {
  &-img {
    width: 60px;
  }
  h1 {
    font-family: 'neuropol';
    font-size: 1.8em;
  }
}
.borde {
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 0;
  background-color: #f00;
  transition: width ease .3s;
}
.toggle-lateral-bar {
  min-width: 60px;
  .icon-menu-dots {
    background-color: #000;
    width: 5px;
    height: 5px;
    box-shadow: 0 10px 0 #000,
                0 -10px 0 #000;
    transition: width ease .2s;
  }
  .large {
    width: 22px;
  }
}
.search {
  &-icon {
    padding-right: 0.5em;
    border-right: 2px solid #808080;
    &::before {
      content: '\e8b6';
    }
  }
  &-input {
    outline: none;
  }
}
.logo,
.toggle-lateral-bar,
.search,
.notifications,
.messages,
.user {
  position: relative;
  &-icon{
    &::before {
      font-family: 'icons';
      font-size: 1.5em;
    }
  }
  &:hover .borde {
      width: 100%;
  }
}
.pop {
  background-color: transparent;
  position: absolute;
  top: 60px;
  right: 0px;
  height: 0;
  overflow: hidden;
  transition: all ease .5s;
}
.pop-user {
  width: 190px;
}
.pop-messages,
.pop-notifications {
  width: 360px;
}
</style>
