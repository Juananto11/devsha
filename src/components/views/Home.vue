<template lang="pug">
  .Home.h-100(:class='{"home": toggleMenu}')
    Header(
      :toggleMenu='toggleMenu'
      :showMessages='showMessages'
      :showNotifications='showNotifications'
      :showUser='showUser'
      @visible='visible'
      @visibleMessages='visibleMessages'
      @visibleNotifications='visibleNotifications'
      @visibleUser='visibleUser'
      @dontShowPopovers='dontShowPopovers'
    )
    Lateral(
      :toggleMenu='toggleMenu',
      @dontShowPopovers='dontShowPopovers'
    )
    router-view(
      :toggleMenu='toggleMenu',
      @dontShowPopovers='dontShowPopovers'
    )
    Chat(@dontShowPopovers='dontShowPopovers')
</template>

<script>
import Chat from './../global/Chat'
import Header from './../global/Header'
import Lateral from './../global/Lateral'

export default {
  name: 'Home',
  components: {
    Chat,
    Header,
    Lateral
  },
  data () {
    return {
      toggleMenu: true,
      showMessages: false,
      showNotifications: false,
      showUser: false
    }
  },
  methods: {
    visible () {
      this.toggleMenu = !this.toggleMenu
    },
    visibleMessages () {
      this.showMessages = !this.showMessages
      this.showNotifications = false
      this.showUser = false
    },
    visibleNotifications () {
      this.showMessages = false
      this.showNotifications = !this.showNotifications
      this.showUser = false
    },
    visibleUser () {
      this.showMessages = false
      this.showNotifications = false
      this.showUser = !this.showUser
    },
    dontShowPopovers () {
      this.showMessages = false
      this.showNotifications = false
      this.showUser = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  padding: 60px 0 0 60px;
}
.home {
  padding: 60px 0 0 180px;
}
</style>
