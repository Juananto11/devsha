<template lang="pug">
  .Card-friend.border.p-3.mb-4
    .d-flex.justify-content-around.align-items-center.pb-2
      img(src='' width='100' height='100')
      .text-right
        p Nombre de usuario
        p Nombre completo
        //- p Fecha de registro
    div.d-flex.justify-content-around
      small 25 publicaciones
      small 335 mensajes
    hr.my-2
    .d-flex.justify-content-around
      router-link(to='/profile/friend').btn.btn-sm.btn-link Ver perfil completo
      router-link(to='/').btn.btn-sm.btn-link Mandar mensaje
</template>

<script>
export default {
  name: 'Card-friend'
}
</script>

<style lang="scss" scoped>
  .Card-friend {
    width: 400px;
    box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
  }
</style>
