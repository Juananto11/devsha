<template lang="pug">
  .Lateral.p-3(:class='{"lateral-toggle": !isVisible}')
    nav.main-nav
      ul.list-unstyled
        li.main-nav-item(:class='{"pl-4": isVisible}')
          router-link.d-flex.align-items-center(to='/')
            .home.icon
              .tip(v-if='!isVisible') Inicio
            .ml-2(v-show='isVisible') Inicio
        li.main-nav-item.d-flex.align-items-center
          div(:class='{"division-icon": !isVisible}')
          div(v-show='isVisible') Publicaciones
        li.main-nav-item(:class='{"pl-4": isVisible}')
          router-link.d-flex.align-items-center(to='/')
            .images.icon
              .tip(v-if='!isVisible') Imagenes
            .ml-2(v-show='isVisible') Imagenes
        li.main-nav-item(:class='{"pl-4": isVisible}')
          router-link.d-flex.align-items-center(to='/')
            .videos.icon
              .tip(v-if='!isVisible') Videos
            .ml-2(v-show='isVisible') Videos
        li.main-nav-item(:class='{"pl-4": isVisible}')
          router-link.d-flex.align-items-center(to='/')
            .posts.icon
              .tip(v-if='!isVisible') Posts
            .ml-2(v-show='isVisible') Posts
        li.main-nav-item.d-flex.align-items-center
          div(:class='{"division-icon": !isVisible}')
          div(v-show='isVisible') Configuración
        li.main-nav-item(:class='{"pl-4": isVisible}')
          router-link.d-flex.align-items-center(to='/')
            .account.icon
              .tip(v-if='!isVisible') Perfil
            .ml-2(v-show='isVisible') Perfil
        li.main-nav-item(:class='{"pl-4": isVisible}')
          router-link.d-flex.align-items-center(to='/')
            .exit.icon
              .tip(v-if='!isVisible') Salir
            .ml-2(v-show='isVisible') Salir

    footer(v-show='isVisible')
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
  props: ['isVisible']
}
</script>

<style lang="scss" scoped>
.Lateral {
  width: 180px;
  height: calc(100vh - 60px);
  margin-top: 60px;
  position: fixed;
  z-index: 5;
  border-right: 2px solid black;
  transition: all ease .2s;
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
