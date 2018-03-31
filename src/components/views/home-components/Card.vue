<template lang="pug">
  .Card.p-3.border.mb-4(:class='{"Card-extended": !toggleMenu}')
    .Card-header.d-flex.justify-content-between
      img.Card-header-image.rounded-circle(src='')
      .Card-header-title.w-100.ml-3.d-flex.align-items-end.justify-content-between
        div
          p.m-0 USUARIO
          small (hora)
        small.bg-info.py-1.px-2.rounded.mr-3 TAG
      .Card-header-icons.d-flex
        .like.px-3.bg-success.d-flex.justify-content-center.align-items-center.rounded-left
        .unlike.px-3.bg-danger.d-flex.justify-content-center.align-items-center.rounded-right
    hr.mt-2.mb-2
    .Card-body
      img.Card-body-img.border(src='')
      p.mt-2.mb-0 TITULO DE LA PUBLICACIÖN
      p assdfsadf sfd as fd asfd a sdfasdfasf sfdas fdasdf asdf asdf asdf asdfasdfasdf asdf sdf asdf asd fasdf asdf
</template>

<script>
export default {
  name: 'Card',
  props: ['toggleMenu']
}
</script>

<style lang="scss" scoped>
.Card {
  width: 600px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
  &-header{
    &-image {
      width: 48px;
      height: 48px;
    }
    &-title {

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
}
.Card-extended {
  width: 720px;
}
</style>
