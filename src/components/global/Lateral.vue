<template lang="pug">
  .Lateral.p-3(
    :class='{"lateral-toggle": !toggleMenu}'
    @click='dontShowPopovers'
    )
    nav.main-nav
      ul.list-unstyled
        li.main-nav-item(:class='{"pl-4": toggleMenu}')
          router-link.d-flex.align-items-center(to='/')
            .home.icon
              .tip(v-if='!toggleMenu') Inicio
            .ml-2(v-show='toggleMenu') Inicio
        li.main-nav-item(:class='{"pl-4": toggleMenu}')
          router-link.d-flex.align-items-center(to='/friends')
            .friend.icon
              .tip(v-if='!toggleMenu') Amigos
            .ml-2(v-show='toggleMenu') Amigos
        li.main-nav-item.d-flex.align-items-center
          div(:class='{"division-icon": !toggleMenu}')
          div(v-show='toggleMenu') Publicaciones
        li.main-nav-item(:class='{"pl-4": toggleMenu}')
          router-link.d-flex.align-items-center(to='/')
            .images.icon
              .tip(v-if='!toggleMenu') Imagenes
            .ml-2(v-show='toggleMenu') Imagenes
        li.main-nav-item(:class='{"pl-4": toggleMenu}')
          router-link.d-flex.align-items-center(to='/')
            .videos.icon
              .tip(v-if='!toggleMenu') Videos
            .ml-2(v-show='toggleMenu') Videos
        li.main-nav-item(:class='{"pl-4": toggleMenu}')
          router-link.d-flex.align-items-center(to='/')
            .posts.icon
              .tip(v-if='!toggleMenu') Noticias
            .ml-2(v-show='toggleMenu') Noticias
        li.main-nav-item.d-flex.align-items-center
          div(:class='{"division-icon": !toggleMenu}')
          div(v-show='toggleMenu') Configuración
        li.main-nav-item(:class='{"pl-4": toggleMenu}')
          router-link.d-flex.align-items-center(to='/profile')
            .account.icon
              .tip(v-if='!toggleMenu') Perfil
            .ml-2(v-show='toggleMenu') Perfil
        li.main-nav-item(:class='{"pl-4": toggleMenu}')
          router-link.d-flex.align-items-center(to='/')
            .exit.icon
              .tip(v-if='!toggleMenu') Salir
            .ml-2(v-show='toggleMenu') Salir

    footer(v-show='toggleMenu')
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
export default {
  name: 'Lateral',
  data () {
    return {
    }
  },
  methods: {
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    }
  },
  props: ['toggleMenu']
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
  &:hover .tip {
    display: block;
    opacity: .8;
  }
}
.tip {
  position: absolute;
  display: none;
  color: white;
  top: 25%;
  left: 170%;
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
.friend::before {
  content: '\e7fb';
}
.images::before {
  content: '\e432';
}
.videos::before {
  content: '\e04b';
}
.posts::before {
  content: '\e254';
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
