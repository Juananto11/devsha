<template lang="pug">
  .Header.w-100.d-flex.align-items-center.justify-content-between.px-4.fixed-top
    .d-flex.h-100
      .logo.h-100.d-inline-flex.align-items-center.justify-content-center
        img.logo-img(src='./../../assets/images/ds-logo.svg')
        h1.m-0 devsha
        .borde
      .toggle-lateral-bar.h-100.d-flex.align-items-center.justify-content-center(@click='visible')
        span.icon-menu.d-block.rounded
        .borde
      .search.h-100.d-flex.justify-content-center.align-items-center
        label.search-icon.m-0
        input.search-input.border-0.p-2(type='text' placeholder="Buscar")
        .borde
    .d-flex.h-100
      .messages.h-100.d-flex.align-items-center.justify-content-center
        span.messages-icon
        .borde
        Messages
      .notification.h-100.d-flex.align-items-center.justify-content-center
        .notification-icon
          .User.h-100.d-flex.align-items-center.justify-content-center
        .borde
        Notifications
      .user.d-flex.align-items-center.justify-content-center
        img.user-image
        p.user-name.m-0.px-3 Juananto11
        span.user-icon
        .borde
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
  name: 'Header'
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
  .icon-menu {
    background-color: #000;
    width: 5px;
    height: 5px;
    box-shadow: 0 10px 0 #000,
                0 -10px 0 #000;
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
  min-width: 60px;
  &-icon {
    &::before {
      content: '\e0c9';
    }
  }
}
.notification {
  min-width: 60px;
  &-icon {
    &::before {
      content: '\e7f5';
    }
  }
}
.user {
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
</style>
