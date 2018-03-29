<template lang="pug">
  .Header.w-100.d-flex.align-items-center.justify-content-between.px-4.fixed-top
    .d-flex.h-100
      .logo.h-100.d-inline-flex.align-items-center.justify-content-center
        img.logo-img(src='./../../assets/images/ds-logo.svg')
        h1.m-0 devsha
        .borde
      .toggle-lateral-bar.h-100.d-flex.align-items-center.justify-content-center(@click='visible')
        span.icon-menu-dots.d-block.rounded(:class='{"large": !isVisible}')
        .borde
      .search.h-100.d-flex.justify-content-center.align-items-center
        label.search-icon.m-0
        input.search-input.border-0.p-2(type='text' placeholder="Buscar")
        .borde
    .d-flex.h-100
      .messages.h-100.d-flex.align-items-center.justify-content-center
        span.messages-icon
        //- .borde
        .pop.pop-messages.d-flex.justify-content-center
          Messages
      .notification.h-100.d-flex.align-items-center.justify-content-center
        .notification-icon
          .User.h-100.d-flex.align-items-center.justify-content-center
        //- .borde
        .pop.pop-notifications.d-flex.justify-content-center
          Notifications
      .user.d-flex.align-items-center.justify-content-center
        img.user-image
        p.user-name.m-0.px-3 USUARIO
        span.user-icon
        //- .borde
        .pop.pop-user.d-flex.justify-content-center
          User
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
    }
  },
  name: 'Header',
  props: ['isVisible']
}
</script>

<style lang="scss" scoped>
.Header {
  height: 60px;
  box-shadow: 1px 1px 5px rgba($color: #000, $alpha: .5);
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
  width: 60px;
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
.messages {
  position: relative;
  min-width: 60px;
  &-icon {
    &::before {
      content: '\e0c9';
    }
  }
}
.notification {
  position: relative;
  min-width: 60px;
  &-icon {
    &::before {
      content: '\e7f5';
    }
  }
}
.user {
  transition: all ease .5s;
  position: relative;
  &-image {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #0f0;
  }
  &-icon {
    &::before {
      content: '\e313';
    }
  }
  &:hover .pop {
    height: 130px;
  }
}
.messages,
.notification {
  &:hover .pop {
    height: 320px;
  }
}
.logo,
.toggle-lateral-bar,
.search,
.messages,
.notification,
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
