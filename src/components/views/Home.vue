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
      @dontShow='dontShow'
    )
    Lateral(
      :toggleMenu='toggleMenu',
      @dontShow='dontShow'
    )
    Posts(:toggleMenu='toggleMenu')
    Chat
      span(name='title')
</template>

<script>
import Chat from './../global/Chat'
import Header from './../global/Header'
import Lateral from './../global/Lateral'
import Posts from './home-components/Posts'

export default {
  name: 'Home',
  components: {
    Chat,
    Header,
    Lateral,
    Posts
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
    dontShow () {
      this.showMessages = false
      this.showNotifications = false
      this.showUser = false
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.toggleMenu = false
    // }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.Home {
  padding: 80px 20px 0 100px;
}
.home {
  padding: 80px 20px 0 220px;
}
</style>
