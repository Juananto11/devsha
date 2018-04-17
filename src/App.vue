<template lang='pug'>
  .App
    transition(name='fade')
      Sppiner(v-if='showSppiner')
    router-view
</template>
<script>
import { mapGetters } from 'vuex'
import Sppiner from './components/global/Sppiner'

export default {
  components: {
    Sppiner
  },
  computed: {
    ...mapGetters(['showSppiner'])
  },
  mounted () {
    console.log(this.showSppiner)
  },
  name: 'App'
}
</script>

<style lang="scss">
@font-face {
  font-family: 'icons';
  src: url('./assets/fonts/icons.eot?nu0dzy');
  src: url('./assets/fonts/icons.eot?nu0dzy#iefix') format('embedded-opentype'),
       url('./assets/fonts/icons.ttf?nu0dzy') format('truetype'),
       url('./assets/fonts/icons.woff?nu0dzy') format('woff'),
       url('./assets/fonts/icons.svg?nu0dzy#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'neuropol';
  src: url('./assets/fonts/neuropol.eot');
  src: url('./assets/fonts/neuropol.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/neuropol.woff2') format('woff2'),
       url('./assets/fonts/neuropol.woff') format('woff'),
       url('./assets/fonts/neuropol.ttf') format('truetype'),
       url('./assets/fonts/neuropol.svg#neuropol') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
