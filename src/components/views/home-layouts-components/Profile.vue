<template lang="pug">
  .Profile.w-100(
    @click='dontShowPopovers'
  )
    .info.w-100.text-right.d-flex.justify-content-around.mt-4
      img.rounded.info-image(src='' width='220' height='220')
      .info-text
        p.info-tag Nombre de Usuario
        p.info-value.px-2.py-0(v-if='data') {{ userName }}
        input.info-value.px-2.py-0(
          type='text'
          v-model='userName'
          v-else
        )
        p.info-tag Nombre Completo
        p.info-value.px-2.py-0(v-if='data') {{ fullName }}
        input.info-value.px-2.py-0(
          type='text'
          v-model='fullName'
          v-else
        )
        p.info-tag Correo Electrónico
        p.info-value.px-2.py-0(v-if='data') {{ email }}
        input.info-value.px-2.py-0(
          type='text'
          v-model='email'
          v-else
        )
        p.info-tag Fecha de registro
        p.info-value.px-2.py-0 {{ regisry }}
        .changeInfo.d-flex.justify-content-around.w-100.mt-4
          button.btn.btn-danger(
            @click='changePass'
            v-if='pass'
          ) Cambiar contraseña
          button.btn.btn-success(
            @click='acceptPass'
            v-else
          ) Aceptar contraseña
          button.btn.btn-info(
            @click='changeData'
            v-if='data'
          ) Modificar datos
          button.btn.btn-success(
            @click='acceptChanges'
            v-else
          ) Aceptar datos
    .container-change-password
      .inputs.d-flex.justify-content-around.w-100.position-absolute(:class='{"inputs-down": !pass}')
        div.w-100.px-2
          label.info-tag.d-block.m-2 Contraseña actual
          input.info-value.w-100.px-3.py-2(type='password')
        div.w-100.px-2
          label.info-tag.d-block.m-2 Contraseña nueva
          input.info-value.w-100.px-3.py-2(type='password')
        div.w-100.px-2
          label.info-tag.d-block.m-2 Repitir contraseña actual
          input.info-value.w-100.px-3.py-2(type='password')
</template>

<script>
export default {
  data () {
    return {
      data: true,
      pass: true,
      userName: 'Juananto11',
      fullName: 'Juan Antonio García Guillen',
      email: 'juananto11@devsha.com',
      regisry: '10 de Marzo de 2018'
    }
  },
  methods: {
    acceptChanges () {
      this.data = true
    },
    acceptPass () {
      this.pass = true
    },
    changeData () {
      this.data = false
    },
    changePass () {
      this.pass = false
    },
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    }
  },
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
.Profile {
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
  &-value[type="text"],
  &-value[type="password"] {
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
.container-change-password {
  height: 150px;
  position: relative;
  overflow: hidden;
  margin: auto;
  width: 900px;
}
.btn {
  width: 200px;
}
.inputs {
  top: -100%;
  transition: top ease .3s;
  &-down {
    top: 20px;
  }
  .info-value {
    text-align: left;
    font-size: 1em;
  }
}
</style>
