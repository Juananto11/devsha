<template lang="pug">
  .ProfileFriend.w-100(
    @click='dontShowPopovers'
  )
    .info.w-100.text-right.d-flex.justify-content-around.mt-4
      img.rounded.info-image(src='' width='220' height='220')
      .info-text
        p.info-tag Nombre de Usuario
        p.info-value.px-2.py-0 {{ username }}
        p.info-tag Nombre Completo
        p.info-value.px-2.py-0 {{ fullName }}
        p.info-tag Correo Electrónico
        p.info-value.px-2.py-0 {{ email }}
        p.info-tag Fecha de registro
        p.info-value.px-2.py-0 {{ regisry }}
    .posts-friend
      h3 Publicaciones
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
      CardPost(:showMenu='showMenu')
</template>

<script>
import CardPost from './../home-components/Card-post'
export default {
  components: {
    CardPost
  },
  data () {
    return {
      username: 'Juananto11',
      fullName: 'Juan Antonio García Guillen',
      email: 'juananto11@devsha.com',
      regisry: '10 de Marzo de 2018'
    }
  },
  methods: {
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    }
  },
  name: 'ProfileFriend',
  props: ['showMenu']
}
</script>

<style lang="scss" scoped>
.ProfileFriend {
  height: calc(100vh - 60px);
}
.info {
  &-tag {
    color: rgb(48, 48, 48);
    margin: 0;
    margin-right: 2em;
  }
  &-value {
    width: 100%;
    text-align: right;
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 8px;
    border: 2px solid transparent;
    outline: none;
    width: 500px;
    border-radius: 10px;
  }
}

</style>
