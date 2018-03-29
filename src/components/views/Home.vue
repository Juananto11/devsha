<template lang="pug">
  .Home.h-100
    Header(:isVisible='isVisible' @visible='visible')
    Lateral(:isVisible='isVisible')
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
      isVisible: true
    }
  },
  methods: {
    visible () {
      this.isVisible = !this.isVisible
    }
  },
  mounted () {
    setTimeout(() => {
      this.isVisible = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>

</style>
