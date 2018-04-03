<template lang="pug">
  .Chat
    .Char-title.px-3.py-1.d-flex.justify-content-between.bg-danger(@click='toggleConnected')
      span Conectados
      small 3
    .Chat-connected.bg-primary(:class='{"Chat-show-connected": showConnected}')
      ul.list-unstyled.m-0
        li.mb-1
          img.mx-3(src='' width='24' height='24')
          span USUARIO 1
      ul.list-unstyled.m-0
        li.mb-1
          img.mx-3(src='' width='24' height='24')
          span USUARIO 2
      ul.list-unstyled.m-0
        li.mb-1
          img.mx-3(src='' width='24' height='24')
          span USUARIO 3
</template>

<script>
export default {
  data () {
    return {
      showConnected: false
    }
  },
  methods: {
    toggleConnected () {
      this.showConnected = !this.showConnected
    }
  },
  name: 'Chat'
}
</script>

<style lang="scss" scoped>
.Chat {
  position: fixed;
  width: 448px;
  bottom: 0;
  right: 42px;
  &-body {
    height: 400px;
  }
  &-connected {
    height: 0;
    overflow: hidden;
  }
  &-show-connected {
    height: auto;
    padding: 8px 0;
  }
}
</style>
