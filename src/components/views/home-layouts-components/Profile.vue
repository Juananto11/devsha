<template lang="pug">
  .Profile(
    @click='dontShowPopovers'
  )
    .info.w-100.text-right.d-flex.justify-content-around.mt-4
      .info.img.d-flex.flex-column
        img.rounded.info-image(
          v-if='$route.params.id === getUser.username'
          :src='getUser.avatar'
          width='220'
          height='220'
        )
        img.rounded.info-image(
          v-else
          :src='profileFriend.avatar'
          width='220'
          height='220'
        )
        button.btn.btn-primary.mx-auto.mt-4(
          v-if='showButtonAddMyFriends'
          @click='addFriend'
        ) Agregar a mis amigos
        button.btn.btn-success.mx-auto.mt-4(
          v-if='$route.params.id === getUser.username'
        ) Cambiar foto de perfil
      .info-text(v-if='$route.params.id !== getUser.username')
        p.info-tag Nombre de Usuario
        p.info-value.px-2.py-0 {{ profileFriend.username }}
        p.info-tag Nombre Completo
        p.info-value.px-2.py-0 {{ profileFriend.fullName }}
        p.info-tag Correo Electrónico
        p.info-value.px-2.py-0 {{ profileFriend.email }}
        p.info-tag Fecha de registro
        p.info-value.px-2.py-0 {{ profileFriend.regisry }}
      .info-text(v-else)
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
              v-if='showInputPassword'
            ) Cambiar contraseña
            button.btn.btn-success(
              @click='acceptPasswordChange'
              v-else
            ) Aceptar contraseña
          button.btn.btn-danger(
            v-else
            @click='cancelDataChange'
          ) Cancelar
          div(v-if='showInputPassword')
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
    .container-change-password(
      v-if='$route.params.id === getUser.username'
      :class='{"container-change-password-extend": showContainerInputPassword}'
    )
      .inputs.d-flex.justify-content-around.w-100.position-absolute(:class='{"inputs-down": !showInputPassword}')
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
    .d-flex.align-items-start
      .posts
        h3 Publicaciones
        CardPost(:showMenu='showMenu')
      FriendsLateral.friendsOfMyFriend(
        v-if='showFriends && $route.params.id === getUser.username'
      )
        span(
          slot='title'
        ) Tu amigos
        li.px-2(
          slot='list-friends'
          v-for='friend in getUser.friends'
          @click='toProfileFriend(friend)'
        )
          .friend.d-flex.align-items-center
            img.rounded-circle(:src='friend.avatar' width='42' height='42')
            span.ml-2.pl-3.w-100.pb-2.d-flex.position-relative
              .friend-info
                p.mb-0.font-weight-bold {{ friend.username }}
                small {{ friend.email }}
              .friend-buttons.d-flex.align-items-center.justify-content-between.position-absolute
                button.friend-buttons-message.btn.btn-primary.btn-sm.d-flex.justify-content-center.align-items-center
                  .tip Enviar mensaje
                button.friend-buttons-delete.btn.btn-danger.btn-sm.d-flex.justify-content-center.align-items-center X
                  .tip.tip-eliminar Eliminar de mis amigos
      FriendsLateral.friendsOfMyFriend(
        v-if='showFriends && $route.params.id !== getUser.username'
      )
        span(
          slot='title'
        ) Amigos de tu amigo
        li.px-4(
          slot='list-friends'
          v-for='friend in profileFriend.friends'
          @click='toProfileFriend(friend)'
        )
          .friend.d-flex.align-items-center
            img.rounded-circle(:src='friend.avatar' width='42' height='42')
            span.ml-2.pl-3.w-100.pb-2
              p.mb-0.font-weight-bold {{ friend.username }}
              small {{ friend.email }}
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions, mapMutations } from 'vuex'

import CardPost from './../home-components/Card-post'
import FriendsLateral from './../home-components/Friends-lateral'
// import Spinner from './../../global/Spinner'

export default {
  components: {
    CardPost,
    FriendsLateral
    // Spinner
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
      showFriends: false,
      showButtonAddMyFriends: false,
      myFriends: [],
      profileFriend: {},
      data: true,
      showInputPassword: true,
      showContainerInputPassword: false,
      registry: '',
      oldPassword: '',
      newPassword: '',
      repeatNewPassword: ''
    }
  },
  methods: {
    ...mapActions([
      'addToMyFriend',
      'modifyData',
      'resetPassword'
    ]),
    ...mapMutations([
      'SET_MESSAGE_OF_CHANGE_PASSWORD',
      'TOGGLE_SPINNER'
    ]),
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

              this.showInputPassword = true
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
    addFriend () {
      this.TOGGLE_SPINNER(true)
      this.addToMyFriend({idFriend: this.profileFriend._id})
      const timer = setInterval(() => {
        if (this.getUser.friends.includes(this.profileFriend._id)) {
          this.showButtonAddMyFriends = false
          this.TOGGLE_SPINNER(false)
          clearInterval(timer)
        }
      }, 300)
    },
    cancelDataChange () {
      this.data = true
    },
    cancelPasswordChange () {
      this.showInputPassword = true
      this.oldPassword = ''
      this.newPassword = ''
      this.repeatNewPassword = ''
      this.showContainerInputPassword = false
    },
    changeData () {
      this.data = false
    },
    changePassword () {
      this.SET_MESSAGE_OF_CHANGE_PASSWORD({})
      this.showInputPassword = false
      this.showContainerInputPassword = true
    },
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    },
    getProfile () {
      axios({
        method: 'post',
        baseURL: 'http://localhost:4000',
        url: '/profile/:id',
        headers: {
          'ContentType': 'application/json',
          token: window.localStorage.getItem('token')
        },
        data: this.$route.params
      })
        .then(res => {
          // let idFriends = []

          let timer = setInterval(() => {
            if (this.getUser) {
              // this.getUser.friends.forEach(friend => {
              //   this.myFriends.push(friend.username)
              // })
              if (this.myFriends.includes(this.$route.params.id) || this.getUser.username === this.$route.params.id) {
                this.showButtonAddMyFriends = false
              } else {
                this.showButtonAddMyFriends = true
              }
              clearInterval(timer)
            }
          }, 100)
          console.log(res.data._id)
          // this.getUser.friends.forEach((friend) => {
          //   idFriends.push(friend._id)
          // })
          // if (idFriends.includes(res.data._id) && res.data.friends.length > 0) {
          //   this.showFriends = true
          // }
          this.profileFriend = res.data
        })
    },
    registered () {
      const registry = setInterval(() => {
        if (this.getUser.registry) {
          console.log(this.getUser.registry)
          clearInterval(registry)
          this.registry = this.getRegistry
        }
      }, 100)
    },
    showContainerFriends () {
      let idFriends = []

      const timer = setInterval(() => {
        if (this.getUser.friends < 0 && this.profileFriend) {
          this.getUser.friends.forEach(friend => {
            this.myFriends.push(friend.username)
          })
          if (idFriends.includes(this.profileFriend._id) && this.profileFriend.friends.length > 0) {
            this.showFriends = true
          }
          console.log('kha'.this.getUser.friends)
          if (this.$route.params.id === this.getUser.username) {
            this.showFriends = true
          }
          clearInterval(timer)
        }
      }, 100)
    },
    toProfileFriend (friend) {
      console.log(friend.username)
      this.$router.push(`/profile/${friend.username}`)
    }
  },
  mounted () {
    this.TOGGLE_SPINNER(false)
    this.showContainerFriends()
    if (this.$route.params.id !== this.getUser.username) {
      console.log('aaaaaa')
      this.getProfile()
    }
  },
  name: 'Profile',
  props: ['showMenu']

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
  height: 0;
  position: relative;
  overflow: hidden;
  margin: auto;
  width: 900px;
  transition: height linear .2s;
  &-extend {
    height: 150px;
  }
}
.btn {
  width: 200px;
}
.inputs {
  top: -100px;
  transition: top ease .3s;
  &-down {
    top: 20px;
  }
  .info-value {
    text-align: left;
    font-size: 1em;
  }
}
.friendsOfMyFriend {
  margin-top: 40px;
}
.friend {
  &-buttons {
    min-width: 70px;
    right: 0;
    top: 12px;
    &-message {
      &::before {
        content: '\e0c9';
      font-family: 'icons';
      }
    }
    &-delete {
      font-weight: bold;
    }
    &-message,
    &-delete {
      width: 30px;
      position: relative;
      &:hover .tip {
        display: block;
        opacity: .8;
      }
    }
  }
}
.tip {
  position: absolute;
  display: none;
  color: white;
  top: 3px;
  left: -112px;
  background-color: #000;
  z-index: 10;
  padding: 0 .5rem .2rem;
  border-radius: 5px;
  font-size: .8rem;
  opacity: 0;
  font-weight: normal;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    border-top: 10px solid transparent;
    border-left: 12px solid black;
    right: -22px;
    border-bottom: 10.2px solid transparent;
    border-right: 12px solid transparent;
  }
}
.tip-eliminar {
  left: -158px;
}
</style>
