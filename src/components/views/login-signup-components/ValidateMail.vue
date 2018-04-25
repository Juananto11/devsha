<template lang="pug">
  .Validate.jumbotron.jumbotron-fluid.m-0.d-flex.flex-column.justify-content-center.align-items-center
    .header.d-flex.justify-content-center.align-items-center
      img(src="./../../../assets/images/ds-logo.svg" width='200')
      h1.display-4.title devsha
    p.welcome.m-auto.text-center.w-75
      strong Bienvenido
      |  cada vez estas más cerca de formar parte de nuestra comunidad.
    p.w-75.m-auto.text-center.mb-5 Nada mas falta que verifiques tu cuenta, te acabamos de mandar un correo con una liga, soló basta que hagas click en ella.
    a.btn.btn-primary.btn-lg.d-block.m-auto(
      :class="{disabled: getDisblockButton}"
      href='#',
      role='button'
      v-if='showButton'
      @click='disblockAccount'
    ) Continuar
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getDisblockButton'])
  },
  data () {
    return {
      showButton: false
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.validateMail(this.$route.params.id)
      this.showButton = true
    }
  },
  methods: {
    ...mapActions(['validateMail', 'activateAccount']),
    ...mapMutations(['TOGGLE_SPINNER']),
    disblockAccount () {
      this.TOGGLE_SPINNER(true)
      this.activateAccount(this.$route.params.id)
      setTimeout(() => {
        this.$router.push('/')
      }, 500)
    }
  },
  name: 'Validate'
}
</script>

<style lang="scss" scoped>
.Validate {
  height: 100vh;
}
.title {
  font-family: 'neuropol'
}
.welcome {
  font-size: 1.5em;
}
.btn {
  width: 200px;
}
</style>
