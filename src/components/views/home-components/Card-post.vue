<template lang="pug">
  .Card-post.p-3.border.mb-4(:class='{"Card-post-large": !toggleMenu}')
    Comments(
      :toggleMenu='toggleMenu',
      :showComments='showComments',
      @closeComments='toggleComments'
    )
    .Card-post-header.d-flex.justify-content-between
      img.Card-post-header-image.rounded-circle(src='')
      .Card-post-header-title.w-100.ml-3.d-flex.align-items-end.justify-content-between
        div
          p.m-0 USUARIO
          small (hora)
        small.bg-info.py-1.px-2.rounded.mr-3 TAG
      .Card-post-header-icons.d-flex
        .like.px-3.bg-success.d-flex.justify-content-center.align-items-center.rounded-left
        .unlike.px-3.bg-danger.d-flex.justify-content-center.align-items-center
        .comments.px-3.bg-primary.d-flex.flex-column.justify-content-center.align-items-center.rounded-right(@click='toggleComments')
          span 20
          small Comentarios
    hr.mt-2.mb-2
    .Card-post-body
      img.Card-post-body-img.border(src='')
      p.mt-2.mb-0 TITULO DE LA PUBLICACIÖN
      p assdfsadf sfd as fd asfd a sdfasdfasf sfdas fdasdf asdf asdf asdf asdfasdfasdf asdf sdf asdf asd fasdf asdf
</template>

<script>
import Comments from './Comments'

export default {
  components: {
    Comments
  },
  data () {
    return {
      showComments: false
    }
  },
  methods: {
    toggleComments () {
      this.showComments = !this.showComments
    }
  },
  name: 'Card-post',
  props: ['toggleMenu']
}
</script>

<style lang="scss" scoped>
.Card-post {
  width: 600px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
  position: relative;
  &-header{
    &-image {
      width: 48px;
      height: 48px;
    }
    &-icons {
      .like,
      .unlike {
        &::before{
          font-family: 'icons';
          font-size: 1.5em;
        }
      }
      .like {
        &::before {
          content: '\e8dc';
          color: green;
        }
      }
      .unlike {
        &::before {
          content: '\e8db';
          color: red;
        }
      }
    }
  }
  &-body {
    &-img {
      width: 566px;
      height: calc((566px * 9) / 16);
      display: block;
      margin: auto;
    }
  }
  &-large {
    width: 720px;
  }
}
</style>
