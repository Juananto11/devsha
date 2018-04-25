<template lang='pug'>
  .Home.h-100(:class='{"home": showMenu}')
    transition(name='fade')
      Publisher(
        v-if='showPublisher'
        @togglePublisher='togglePublisher'
      )
    Header(
      :showMenu='showMenu'
      :showMessages='showMessages'
      :showNotifications='showNotifications'
      :showUser='showUser'
      @toggleMenu='toggleMenu'
      @toggleMessages='toggleMessages'
      @toggleNotifications='toggleNotifications'
      @togglePublisher='togglePublisher'
      @toggleUser='toggleUser'
      @dontShowPopovers='dontShowPopovers'
    )
    Lateral(
      :showMenu='showMenu',
      @dontShowPopovers='dontShowPopovers'
    )
    router-view.padding(
      @dontShowPopovers='dontShowPopovers'
      :showMenu='showMenu'
    )
    Chat(@dontShowPopovers='dontShowPopovers')
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Chat from './../global/Chat'
import Header from './../global/Header'
import Lateral from './../global/Lateral'
import Publisher from './../global/Publisher'

export default {
  components: {
    Chat,
    Header,
    Lateral,
    Publisher
  },
  created () {
    this.TOGGLE_SPINNER()
    this.getUserToSession()
  },
  data () {
    return {
      showMenu: true,
      showMessages: false,
      showNotifications: false,
      showPublisher: false,
      showUser: false
    }
  },
  methods: {
    ...mapActions(['getUserToSession']),
    ...mapMutations(['TOGGLE_SPINNER']),
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    toggleMessages () {
      this.showMessages = !this.showMessages
      this.showNotifications = false
      this.showPublisher = false
      this.showUser = false
    },
    toggleNotifications () {
      this.showMessages = false
      this.showNotifications = !this.showNotifications
      this.showPublisher = false
      this.showUser = false
    },
    togglePublisher () {
      this.showMessages = false
      this.showNotifications = false
      this.showPublisher = !this.showPublisher
      this.showUser = false
    },
    toggleUser () {
      this.showMessages = false
      this.showNotifications = false
      this.showPublisher = false
      this.showUser = !this.showUser
    },
    dontShowPopovers () {
      this.showMessages = false
      this.showNotifications = false
      this.showUser = false
    }
  },
  name: 'Home'
}
</script>

<style lang='scss' scoped>
  .Home {
    padding: 60px 0 0 60px
  }
  .home {
    padding: 60px 0 0 180px
  }
  .padding {
    padding: 20px 20px 30px 40px
  }
</style>
