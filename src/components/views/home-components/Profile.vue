<template lang="pug">
  .Profile(:class='{"Profile-large": !toggleMenu}')
    .info.w-100.text-right.d-flex.justify-content-around.mt-4
      img.rounded.info-image(src='' width='220' height='220')
      .info-text
        p.info-tag Nombre de Usuario
        p.info-value.px-2.py-0(v-if='change') {{ userName }}
        input.info-value.px-2.py-0(
          type='text'
          v-model='userName'
          v-else
        )
        p.info-tag Nombre Completo
        p.info-value.px-2.py-0(v-if='change') {{ fullName }}
        input.info-value.px-2.py-0(
          type='text'
          v-model='fullName'
          v-else
        )
        p.info-tag Correo Electrónico
        p.info-value.px-2.py-0(v-if='change') {{ email }}
        input.info-value.px-2.py-0(
          type='text'
          v-model='email'
          v-else
        )
        p.info-tag Fecha de registro
        p.info-value.px-2.py-0 {{ regisry }}
        .changeInfo.d-flex.justify-content-around.w-100
          button.btn.btn-danger Cambiar contraseña
          button.btn.btn-info(
            @click='changeData'
            v-if='change'
          ) Modificar datos
          button.btn.btn-success(
            @click='acceptChanges'
            v-else
          ) Aceptar cambios
    .container-pass.d-flex.justify-content-around.align-items-center.w-100.bg-danger()
      div.w-100.px-2
        label.info-tag.d-block.m-2 Contraseña actual
        input.w-100(type='password')
      div.w-100.px-2
        label.info-tag.d-block.m-2 Contraseña nueva
        input.w-100(type='password')
      div.w-100.px-2
        label.info-tag.d-block.m-2 Repite la contraseña actual
        input.w-100(type='password')
</template>

<script>
export default {
  data () {
    return {
      change: true,
      userName: 'Juananto11',
      fullName: 'Juan Antonio García Guillen',
      email: 'juananto11@devsha.com',
      regisry: '10 de Marzo de 2018'
    }
  },
  methods: {
    acceptChanges () {
      this.change = true
    },
    changeData () {
      this.change = false
    }
  },
  mounted () {
    console.log(this.toggleMenu)
  },
  name: 'Profile',
  props: ['toggleMenu']
}
</script>

<style lang="scss" scoped>
.Profile {
  padding: 20px 20px 0 40px;
  width: 1000px;
  &-large {
    width: 1120px;
  }
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
  &-value[type="text"] {
    background-color: rgb(223, 223, 223);
    transition: background-color ease .3s;
    &:hover {
      background-color: rgb(202, 202, 202);
    }
    &:focus {
      border-bottom: 2px solid black;
    }
  }
}
.container-pass {
  height: 150px;
}
</style>
