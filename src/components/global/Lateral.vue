<template lang="pug">
  .Lateral.p-3(
    :class='{"lateral-toggle": !showMenu}'
    @click='dontShowPopovers'
    )
    nav.main-nav
      ul.list-unstyled
        li.main-nav-item(:class='{"pl-4": showMenu}')
          a.d-flex.align-items-center(
            @click='towardSection("/")'
          )
            .home.icon
              .tip(v-if='!showMenu') Inicio
            .ml-2(v-show='showMenu') Inicio
        li.main-nav-item.d-flex.align-items-center
          div(:class='{"division-icon": !showMenu}')
          div(v-show='showMenu') Publicaciones
        li.main-nav-item(:class='{"pl-4": showMenu}')
          a.d-flex.align-items-center(
            @click='towardSection()'
          )
            .images.icon
              .tip(v-if='!showMenu') Imagenes
            .ml-2(v-show='showMenu') Imagenes
        li.main-nav-item(:class='{"pl-4": showMenu}')
          a.d-flex.align-items-center(
            @click='towardSection()'
          )
            .videos.icon
              .tip(v-if='!showMenu') Videos
            .ml-2(v-show='showMenu') Videos
        li.main-nav-item(:class='{"pl-4": showMenu}')
          a.d-flex.align-items-center(
            @click='towardSection()'
          )
            .posts.icon
              .tip(v-if='!showMenu') Noticias
            .ml-2(v-show='showMenu') Noticias
        li.main-nav-item.d-flex.align-items-center
          div(:class='{"division-icon": !showMenu}')
          div(v-show='showMenu') Configuración
        li.main-nav-item(:class='{"pl-4": showMenu}')
          a.d-flex.align-items-center(
            @click='towardSection(`/profile/${getUser.username}`)'
          )
            .account.icon
              .tip(v-if='!showMenu') Perfil
            .ml-2(v-show='showMenu') Perfil
        li.main-nav-item(:class='{"pl-4": showMenu}')
          a.d-flex.align-items-center(
            @click='towardSection("/login")'
          )
            .exit.icon
              .tip(v-if='!showMenu') Salir
            .ml-2(v-show='showMenu') Salir

    footer(v-show='showMenu')
      nav.social-nav
        ul.list-unstyled.d-flex.justify-content-around.m-0
          li.face
          li.twit
          li.github
          li.youtube
      hr.m-2
      p &copy; - devsha - 2018
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapMutations(['TOGGLE_SPINNER', 'DELETE_SESSION']),
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
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
  name: 'Lateral',
  props: ['showMenu']
}
</script>

<style lang="scss" scoped>
.Lateral {
  width: 180px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 5;
  border-right: 2px solid black;
  background-color: rgb(0, 0, 0);
  li {
    cursor: pointer;
    a {
    transition: color linear .3s;
      color: rgb(0, 81, 255);
    }
    &:hover{
      a {
        color: #35495e;
      }
      .icon {
        color: rgb(0, 81, 255);
      }
    }
  }
}
.lateral-toggle {
  width: 60px;
}
.main-nav {
  height: calc(100% - 55px);
  &-item {
    height: 2.5em;
    a {
      text-decoration: none;
      height: 2.5em;
    }
  }
  .division-icon::before {
    content: '\e15b';
    font-family: 'icons';
    font-size: 1.5em;
    color: #42b883;
  }
}
.icon {
  color: #35495e;
  font-family: 'icons';
  font-size: 1.5em;
  position: relative;
  transition: color linear .3s;
  &:hover {
    .tip {
      display: block;
      opacity: .8;
    }
  }

}
.tip {
  position: absolute;
  display: none;
  color: white;
  top: 25%;
  left: 220%;
  background-color: #000;
  z-index: 10;
  padding: 0 .5rem .2rem;
  border-radius: 5px;
  font-size: .8rem;
  opacity: 0;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    border-top: 10px solid transparent;
    border-left: 12px solid transparent;
    left: -22px;
    border-bottom: 10.2px solid transparent;
    border-right: 12px solid black;
  }
}
.home::before {
  content: '\e88a';
}
.images::before {
  content: '\e432';
}
.videos::before {
  content: '\e04b';
}
.posts::before {
  content: '\e904';
}
.account::before {
  content: '\e853';
}
.exit::before {
  content: '\e8ac';
}
.social-nav li::before {
    font-family: 'icons';
}
.face::before {
  content: '\e900';
  color: #3B5998;
}
.twit::before {
  content: '\e902';
  color: #1da1f2;
}
.github::before {
  content: '\e901';
  color: #333;
}
.youtube::before {
  content: '\e903';
  color: #ff0000;
}
</style>
