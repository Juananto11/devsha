<template lang="pug">
  .Header.w-100.d-flex.align-items-center.justify-content-between.px-4.fixed-top
    .d-flex.h-100
      .logo.h-100.d-inline-flex.align-items-center.border-hover
        img.logo-img(src='./../../assets/images/ds-logo.svg')
        h1.m-0 devsha
      .toggle-lateral-bar.h-100.d-flex.align-items-center.justify-content-center.border-hover(@click='visible')
        span.icon-menu.d-block.rounded
      .search.h-100.d-flex.justify-content-center.align-items-center.border-hover
        label.search-label.m-0
        input.search-input.border-0.p-2(type='text' placeholder="Buscar")
    .d-flex.h-100
      Messages
      Notifications
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
  box-shadow: 0 2px 5px rgba($color: #000000, $alpha: 0.5);
}
.logo {
  &-img {
    width: 70px;
  }
}
.toggle-lateral-bar {
  min-width: 60px;
  .icon-menu {
    background-color: #000;
    width: 5px;
    height: 5px;
    box-shadow: 0 10px 0 black,
                0 -10px 0 black;
  }
}
.search {
  &-label {
    padding-right: 0.5em;
    border-right: 2px solid gray;
    &::before {
      content: '\e8b6'
    }
  }
  &-input {
    outline: none;
  }
}
</style>
