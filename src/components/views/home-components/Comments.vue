<template lang="pug">
  .Comments.bg-light(:class='{"Comments-large": !toggleMenu, "Comments-extended": showComments}')
    .Comments-title.d-flex.justify-content-between
      p.m-0.font-weight-bold Comentarios
      span(@click='closeComments') Cerrar
    hr.my-2
    .Comments-container
      .comment.d-flex
        img.rounded-circle(src='' height='40' width='40')
        div.ml-3
          p.m-0 USUARIO
          p Comentario Comentario Comentario Comentario
      .comment.d-flex
        img.rounded-circle(src='' height='40' width='40')
        div.ml-3
          p.m-0 USUARIO
          p Comentario Comentario Comentario Comentario
      .comment.d-flex
        img.rounded-circle(src='' height='40' width='40')
        div.ml-3
          p.m-0 USUARIO
          p Comentario Comentario Comentario Comentario
      .comment.d-flex
        img.rounded-circle(src='' height='40' width='40')
        div.ml-3
          p.m-0 USUARIO
          p Comentario Comentario Comentario Comentario
    hr.my-2
    .Comments-commentary
      label.d-block.m-0 Comentar
      input.w-100.border-0(type='text', placeholder="Escribe tu comentario")
</template>

<script>
export default {
  methods: {
    closeComments () {
      this.$emit('closeComments')
    }
  },
  name: 'Comments',
  props: [
    'toggleMenu',
    'showComments'
  ]
}
</script>

<style lang="scss" scoped>
.Comments {
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  transition: height ease .3s,
              padding ease .6s;
  &-large {
    width: 720px;
  }
  &-extended {
    height: 100%;
    padding: 1em;
  }
  &-container {
    height: calc(100% - 110px);
  }
  &-commentary {
    input {
      outline: none;
    }
  }
}
</style>
