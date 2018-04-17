<template lang="pug">
  .User.d-flex.align-items-center.justify-content-center(@click='toggleUser')
    img.User-image
    p.User-name.m-0.px-3 {{ getUser.username }}
    .User-icon.mr-2(:class='{"User-icon-down": !showUser, "User-icon-up": showUser}')
    slot(name='borde')
    .invisible-popover(v-if='showUser')
      Popover.pop-user
        span.d-flex.align-items-center.mx-3(slot='title')
          img.bo0rounded-circle.mr-3(src='' height='20' width='20')
          | Usuario
        ul.list-unstyled(slot='body')
          router-link.d-flex.align-items-center(to='profile')
            span.mr-3.account
            p.m-0 Ver perfil
          router-link.d-flex.align-items-center(to='/')
            span.mr-3.exit
            p.m-0 Cerrar Sesión
</template>

<script>
import { mapGetters } from 'vuex'
import Popover from './Popover'

export default {
  computed: {
    ...mapGetters(['getUser'])
  },
  components: {
    Popover
  },
  methods: {
    toggleUser () {
      this.$emit('toggleUser')
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
    border: 1px solid #0f0;
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
