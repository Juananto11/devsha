<template lang="pug">
  .User.d-flex.align-items-center.justify-content-center.px-3(@click='toggleUser')
    img.User-image(:src='getUser.avatar')
    p.User-name.m-0.px-3 {{ getUser.username }}
    .User-icon.mr-2(:class='{"User-icon-down": !showUser, "User-icon-up": showUser}')
    slot(name='borde')
    .invisible-popover(v-if='showUser')
      Popover.pop-user
        span.d-flex.align-items-center.mx-3(slot='title')
          img.bo0rounded-circle.mr-3(src='' height='20' width='20')
          | Usuario
        ul.list-unstyled(slot='body')
          li(@click='towardSection(`/profile/${getUser.username}`)')
            a.d-flex.align-items-center
              span.mr-3.account
              p.m-0 Ver perfil
          li(@click='towardSection("/login")')
            a.d-flex.align-items-center
              span.mr-3.exit
              p.m-0 Cerrar Sesión
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Popover from './Popover'

export default {
  computed: {
    ...mapGetters(['getUser'])
  },
  components: {
    Popover
  },
  methods: {
    ...mapMutations(['DELETE_SESSION', 'TOGGLE_SPINNER']),
    toggleUser () {
      this.$emit('toggleUser')
    },
    towardSection (toward) {
      this.TOGGLE_SPINNER(true)
      setTimeout(() => {
        this.$router.push(toward)
      }, 300)
      if (toward === '/login') {
        this.DELETE_SESSION()
      }
    }
  },
  name: 'User',
  props: ['showUser']
}
</script>

<style lang="scss" scoped>
.User {
  cursor: pointer;
  &-image {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  &-icon {
    &::before {
      font-size: 1.5em;
      font-family: 'icons';
    }
    &-down::before {
      content: '\e313';
    }
    &-up::before {
      content: '\e316';
    }
  }
}
.visible-popover {
  height: 0px;
}
.invisible-popover {
  position: absolute;
  width: 190px;
  height: 120px;
  right: 0;
  top: 60px;
  overflow: hidden;
}
.pop-user {
  margin: 15px auto 0;
  width: 170px;
  height: 100;
}
.account::before {
  content: '\e853';
  font-family: 'icons';
  font-size: 1.2em;
}
.exit::before {
  content: '\e8ac';
  font-family: 'icons';
  font-size: 1.2em;
}
</style>
