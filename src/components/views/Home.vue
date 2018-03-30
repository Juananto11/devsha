<template lang="pug">
<<<<<<< HEAD
  .Home.h-100(@click='showFalse')
    Header(
      :toggleMenu='toggleMenu'
      :showMessages='showMessages'
      :showNotifications='showNotifications'
      :showUser='showUser'
      @visible='visible'
      @visibleMessages='visibleMessages'
      @visibleNotifications='visibleNotifications'
      @visibleUser='visibleUser'
      )
    Lateral(:toggleMenu='toggleMenu')
=======
  .Home.h-100
    Header(:isVisible='isVisible' @visible='visible')
    Lateral(:isVisible='isVisible')
>>>>>>> c0137597604f0c6b23907e333d2ec21b6f7a67f8
</template>

<script>
import Header from './../global/Header'
import Lateral from './../global/Lateral'

export default {
  name: 'Home',
  components: {
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
    showFalse () {

    }
  },
  mounted () {
    setTimeout(() => {
      this.toggleMenu = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>

</style>
