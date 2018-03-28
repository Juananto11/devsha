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
  src:  url('./assets/fonts/icons.eot?nu0dzy');
  src:  url('./assets/fonts/icons.eot?nu0dzy#iefix') format('embedded-opentype'),
    url('./assets/fonts/icons.ttf?nu0dzy') format('truetype'),
    url('./assets/fonts/icons.woff?nu0dzy') format('woff'),
    url('./assets/fonts/icons.svg?nu0dzy#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
.App {
  font-family: 'icons';
  height: 2000px;
}
.border-hover {
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: border linear .5s;
  &:hover {
    border-bottom: 3px solid red;
  }
}
</style>
