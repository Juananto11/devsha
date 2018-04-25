<template lang="pug">
  .Profile.w-100#hfdfdfg(
    @click='dontShowPopovers'
  )
    .info.w-100.text-right.d-flex.justify-content-around.mt-4
      img.rounded.info-image(:src='getUser.avatar' width='220' height='220')
      .info-text
        p.info-tag Nombre de Usuario
        p.info-value.px-2.py-0(v-if='data') {{ getUser.username }}
        input.info-value.px-2.py-0(
          type='text'
          :value='getUser.username'
          v-else
          :placeholder='getUser.username'
          ref='newUsername'
        )
        p.info-tag Nombre Completo
        p.info-value.px-2.py-0(v-if='data') {{ getUser.fullName }}
        input.info-value.px-2.py-0(
          type='text'
          :value='getUser.fullName'
          v-else
          :placeholder='getFullName'
          ref='newFullName'
        )
        p.info-tag Correo Electrónico
        p.info-value.px-2.py-0(v-if='data') {{ getUser.email }}
        input.info-value.px-2.py-0(
          type='text'
          :value='getUser.email'
          v-else
          :placeholder='getUser.email'
          ref='newEmail'
        )
        p.info-tag Fecha de registro
        p.font-weight-bold.px-2.py-0 {{ registry }}
        .changeInfo.d-flex.justify-content-around.w-100.mt-4
          div(v-if='data')
            button.btn.btn-danger(
              @click='changePassword'
              v-if='pass'
            ) Cambiar contraseña
            button.btn.btn-success(
              @click='acceptPasswordChange'
              v-else
            ) Aceptar contraseña
          button.btn.btn-danger(
            v-else
            @click='cancelDataChange'
          ) Cancelar
          div(v-if='pass')
            button.btn.btn-info(
              @click='changeData'
              v-if='data'
            ) Modificar datos
            button.btn.btn-success(
              @click='acceptDataChanges'
              v-else
            ) Aceptar datos
          button.btn.btn-danger(
            v-else
            @click='cancelPasswordChange'
          ) Cancelar
    .container-change-password
      .inputs.d-flex.justify-content-around.w-100.position-absolute(:class='{"inputs-down": !pass}')
        div.w-100.px-2
          label.info-tag.d-block.m-2 Contraseña actual
          input.info-value.w-100.px-3.py-2(
            type='password'
            v-model.trim='oldPassword'
          )
        div.w-100.px-2
          label.info-tag.d-block.m-2 Contraseña nueva
          input.info-value.w-100.px-3.py-2(
            type='password'
            v-model.trim='newPassword'
          )
        div.w-100.px-2
          label.info-tag.d-block.m-2 Repitir contraseña actual
          input.info-value.w-100.px-3.py-2(
            type='password'
            v-model.trim='repeatNewPassword'
          )

      .container-messages-password
        p.bg-success.my-5.rounded.py-4.w-100.text-center(v-if='getMessageOfChangePassword.changePassword === "valid"') {{ getMessageOfChangePassword.message }}
        p.bg-danger.my-5.rounded.py-4.w-100.text-center.h-100(v-if='getMessageOfChangePassword.changePassword === "invalid"') {{ getMessageOfChangePassword.message }}
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Spinner from './../../global/Spinner'

export default {
  components: {
    Spinner
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getRegistry',
      'getMessageOfChangePassword'
    ]),
    getFullName () {
      if (this.getUser.fullName) {
        return this.getUser.fullName
      }
      return 'Ingresa tu nombre'
    }
  },
  created () {
    this.registered()
  },
  data () {
    return {
      data: true,
      pass: true,
      registry: '',
      oldPassword: '',
      newPassword: '',
      repeatNewPassword: ''
    }
  },
  methods: {
    ...mapActions([
      'modifyData',
      'resetPassword'
    ]),
    ...mapMutations(['SET_MESSAGE_OF_CHANGE_PASSWORD']),
    acceptDataChanges () {
      let newDataUser = {}
      let newUsername = this.$refs.newUsername.value
      let newFullName = this.$refs.newFullName.value
      let newEmail = this.$refs.newEmail.value

      if (newUsername !== this.getUser.username) {
        if (newUsername) {
          newDataUser.username = newUsername
        } else {
          alert('El nombre de usuario no puede estar vacio')
        }
      }

      if (newEmail !== this.getUser.email) {
        if (newEmail) {
          if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(newEmail)) {
            newDataUser.email = newEmail
          } else {
            alert('Ese correo no es valido')
          }
        } else {
          alert('El correo electrónico no puede estar vacio')
        }
      }

      if (newFullName !== this.getUser.fullName) {
        if (newFullName) {
          newDataUser.fullName = newFullName
        }
      }

      if (Object.keys(newDataUser).length > 0) {
        console.log('aaa', newDataUser)
        this.modifyData(newDataUser)
        this.data = true
      }
    },
    acceptPasswordChange () {
      if (this.oldPassword) {
        if (this.newPassword) {
          if (this.repeatNewPassword) {
            if (this.newPassword === this.repeatNewPassword) {
              this.resetPassword({
                oldPassword: this.oldPassword,
                newPassword: this.newPassword
              })

              this.pass = true
              this.oldPassword = ''
              this.newPassword = ''
              this.repeatNewPassword = ''
            } else {
              alert('Las contraseñas no coinciden')
            }
          } else {
            alert('El compo repetir contraseña nueva es requerido')
          }
        } else {
          alert('El compo contraseña nueva es requerido')
        }
      } else {
        alert('El compo contraseña actual es requerido')
      }
      setTimeout(() => {
        this.SET_MESSAGE_OF_CHANGE_PASSWORD({})
      }, 8000)
    },
    cancelDataChange () {
      this.data = true
    },
    cancelPasswordChange () {
      this.pass = true
      this.oldPassword = ''
      this.newPassword = ''
      this.repeatNewPassword = ''
    },
    changeData () {
      this.data = false
    },
    changePassword () {
      this.SET_MESSAGE_OF_CHANGE_PASSWORD({})
      this.pass = false
    },
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    },
    registered () {
      const registry = setInterval(() => {
        if (this.getUser.registry) {
          console.log(this.getUser.registry)
          clearInterval(registry)
          this.registry = this.getRegistry
        }
      }, 100)
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
    height: 52px;
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
