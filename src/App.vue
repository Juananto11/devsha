<template lang='pug'>
  .App
    router-view
</template>
<script>
export default {
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
</style>
