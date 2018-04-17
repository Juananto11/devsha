<template lang="pug">
  .Publisher.d-flex.justify-content-center.align-items-center
    button.close-publisher.btn.btn-danger.rounded-circle(@click='togglePublisher') X
    .container-publisher.border
      nav.w-100
        ul.d-flex.m-0.list-unstyled.w-100.justify-content-between
          li.pb-3.publication.w-100.border.text-center(
            :class='{"selected": showPublication}'
            @click='selectPublication'
          ) Publicación
          li.pb-3.image.w-100.border.text-center(
            :class='{"selected": showImage}'
            @click='selectImage'
          ) Imagen
          li.pb-3.video.w-100.border.text-center(
            :class='{"selected": showVideo}'
            @click='selectVideo'
          ) Video
      .content.d-flex(:class='{"content-publication": showPublication, "content-image": showImage, "content-video": showVideo}')
        .publisher-publication(:class='{"publisher-publication-2": showPublication}')
          .publisher-container.px-3
            h3.mt-3.mb-0.text-center Publicación
            label.d-flex.m-0.justify-content-between.align-items-center Escribe lo que piensas
            textarea.d-block.w-100.px-3.my-0.py-2(id='publicationText' placeholder="¿Qué quieres publicar?")
            p.font-weight-bold.text-center.my-1 Ó
            label.m-0.w-100.d-flex.justify-content-between.align-items-center Comparte una noticia
            input.py-2.px-3.w-100(type='text' placeholder="Ingresa una URL")
            button.btn.btn-success.d-block Publicar
        .publisher-image(:class='{"publisher-image-2": showImage}')
          .publisher-container.px-3
            h3.text-center.m-3 Publica una imagen
            label.pt-2.d-flex.align-items-center Desde tu PC
            input(type='file' id="image")
            p.font-weight-bold.text-center.my-3 Ó
            label.pt-2.w-100.d-flex.justify-content-between.align-items-center Una desde una URL
            input.py-2.px-3.w-100(type='text' placeholder="Ingresa una URL")
            button.btn.btn-success.d-block Publicar
        .publisher-video(:class='{"publisher-video-2": showVideo}')
          .publisher-container.px-3
            h3.text-center.m-3 Publica un video
            label.pt-2.d-flex.align-items-center Desde tu PC
            input(type='file' id="image")
            p.font-weight-bold.text-center.my-3 Ó
            label.pt-2.w-100.d-flex.justify-content-between.align-items-center Una desde una URL
            input.py-2.px-3.w-100(type='text' placeholder="Ingresa una URL")
            button.btn.btn-success.d-block Publicar
</template>

<script>
export default {
  data () {
    return {
      showPublication: true,
      showImage: false,
      showVideo: false
    }
  },
  methods: {
    selectPublication () {
      this.showPublication = true
      this.showImage = false
      this.showVideo = false
    },
    selectImage () {
      this.showPublication = false
      this.showImage = true
      this.showVideo = false
    },
    selectVideo () {
      this.showPublication = false
      this.showImage = false
      this.showVideo = true
    },
    togglePublisher () {
      this.$emit('togglePublisher')
    }
  },
  name: 'Publication'
}
</script>

<style lang="scss" scoped>
  .Publisher {
    overflow: hidden;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.651);
    z-index: 100;
  }
  .container-publisher {
    width: 600px;
    background-color: rgb(197, 197, 197);
  }
  .close-publisher {
    position: absolute;
    top: 30px;
    right: 50px;
  }
  .publication {
    transition: background-color linear .5s;
  }
  .image {
    transition: background-color linear .5s;
  }
  .video {
    transition: background-color linear .5s;
  }
  .selected {
    background-color: rgb(172, 172, 172);
    transition: background-color linear .5s;
  }
  .content {
    height: 350px;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -2em;
      border-top: 1em solid transparent;
      border-right: 1em solid transparent;
      border-bottom: 1em solid rgb(224, 224, 224);
      border-left: 1em solid transparent;
      transition: left linear .5s;
    }
    &-publication,
    &-image,
    &-video {
      background-color: rgb(224, 224, 224);
      transition: left linear .5s;
    }
    &-publication {
      &::before {
        left: calc(100px - 1em);
      }
    }
    &-image {
      &::before {
        left: calc(300px - 1em);
      }
    }
    &-video {
      &::before {
        left: calc(500px - 1em);
      }
    }
  }
  .publisher {
    &-publication,
    &-image,
    &-video{
      width: 0;
      display: inline-block;
      transition: width linear .5s;
      overflow: hidden;
      &-2 {
        width: 100%;
      }
      input[type='text'],
      textarea {
        outline: none;
        border-radius: 10px;
        border: 1px solid rgb(170, 170, 170);
      }
      textarea {
        width: calc(100% - 2em);
        margin: 1em auto;
        height: 100px;
        resize: none;
      }
      button {
        margin: 1em auto;
      }
    }
    &-container {
      min-width: 598px;
    }
  }
</style>
