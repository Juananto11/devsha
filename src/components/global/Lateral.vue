<template lang="pug">
  .Lateral.p-3(:class='{"lateral-toggle": !isVisible}')
    nav.main-nav
      ul.list-unstyled
        li(:class='{"ml-4": isVisible}')
          router-link.d-flex.align-items-center.home(to='/')
            span.ml-2(v-show='isVisible') Inicio
        li.d-flex.align-items-center(:class='{"division-icon": !isVisible}', to='/', tag='li')
          span(v-show='isVisible') Publicaciones
        li(:class='{"ml-4": isVisible}')
          router-link.images.d-flex.align-items-center(to='/')
            span.ml-2(v-show='isVisible') Imagenes
        li(:class='{"ml-4": isVisible}')
          router-link.videos.d-flex.align-items-center(to='/')
            span.ml-2(v-show='isVisible') Videos
        li(:class='{"ml-4": isVisible}')
          router-link.posts.d-flex.align-items-center(to='/')
            span.ml-2(v-show='isVisible') Posts
        li.d-flex.align-items-center(:class='{"division-icon": !isVisible}', to='/' tag='li')
          span(v-show='isVisible') Configuración
        li(:class='{"ml-4": isVisible}')
          router-link.account.d-flex.align-items-center(to='/')
            span.ml-2(v-show='isVisible') Perfil
        li(:class='{"ml-4": isVisible}')
          router-link.exit.d-flex.align-items-center(to='/')
            span.ml-2(v-show='isVisible') Salir

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
}
.lateral-toggle {
  width: 60px;
}
.main-nav {
  height: calc(100% - 55px);
  li, a {
    height: 2.5em;
    &::before {
      font-size: 1.5em;
      color: #35495e;
    }
  }
  .division-icon::before {
    content: '\e15b';
    color: #42b883;
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
