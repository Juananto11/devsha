<template lang="pug">
  .Publisher.d-flex.justify-content-center.align-items-center(v-if='showPublisher')
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
          h3.text-center.m-3 Publicación
          textarea.d-block.px-3.py-2(placeholder="¿Qué quieres publicar?")
          label.pt-2.px-3.w-100.d-flex.justify-content-between.align-items-center URL
            input.ml-3.py-2.px-3.w-100.py-1.px-2(type='text' placeholder="Ingresa una URL")
          button.btn.btn-success.d-block Publicar
        .publisher-image(:class='{"publisher-image-2": showImage}') Image
          form(enctype='multipart/form-data')
            input(type='file')
        .publisher-video(:class='{"publisher-video-2": showVideo}') Video
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
  name: 'Publication',
  props: ['showPublisher']
}
</script>

<style lang="scss" scoped>
  .Publisher {
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
    height: 300px;
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
    &-publication{
      width: 0;
      height: 300px;
      display: inline-block;
      transition: width linear .5s;
      overflow: hidden;
      &-2 {
        width: 100%;
      }
      input,
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
    &-image{
      overflow: hidden;
      width: 0;
      height: 300px;
      display: inline-block;
      transition: width linear .5s;
      &-2 {
        width: 100%;
      }
    }
    &-video{
      overflow: hidden;
      width: 0;
      height: 300px;
      display: inline-block;
      transition: width linear .5s;
      &-2 {
        width: 100%;
      }
    }
  }
</style>
