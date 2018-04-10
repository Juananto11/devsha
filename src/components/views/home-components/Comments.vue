<template lang="pug">
  .Comments.bg-light(:class='{"Comments-large": !toggleMenu, "Comments-extended": showComments}')
    .Comments-title.d-flex.justify-content-between
      p.m-0.font-weight-bold Comentarios
      span(@click='closeComments') Cerrar
    hr.my-2
    .Comments-container(ref='contentComments')
      .comment.d-flex(v-for='comment in comments')
        img.rounded-circle(src='' height='40' width='40')
        .w-100.ml-3
          .d-flex.justify-content-between.w-100
            p.m-0.font-weight-bold {{ comment.user }}
            small.mr-3.font-weight-light ({{ comment.hour() }})
          p.pl-3 {{ comment.comment }}
    hr.my-2
    .Comments-commentary
      label.d-block.m-0(for='comment') Comentar
      .d-flex
        input.w-100.border-0.px-3.mr-3#comment(
          type='text'
          placeholder="Escribe tu comentario"
          v-model='comment'
          ref='inputComment'
          @keypress.enter='sendComment'
        )
        button.comment-send(@click='sendComment')
</template>

<script>
export default {
  data () {
    return {
      comment: '',
      comments: []
    }
  },
  methods: {
    closeComments () {
      this.$emit('closeComments')
    },
    sendComment () {
      if (this.comment.trim()) {
        this.comments.push({
          comment: this.comment,
          user: 'Juananto11',
          sent: new Date(),
          hour () {
            let hours
            let minutes
            let seconds
            if (this.sent.getHours() < 10) {
              hours = `0${this.sent.getHours()}`
            } else {
              hours = this.sent.getHours()
            }
            if (this.sent.getMinutes() < 10) {
              minutes = `0${this.sent.getMinutes()}`
            } else {
              minutes = this.sent.getMinutes()
            }
            if (this.sent.getSeconds() < 10) {
              seconds = `0${this.sent.getSeconds()}`
            } else {
              seconds = this.sent.getSeconds()
            }
            return `${hours}:${minutes}:${seconds}`
          }
        })
        this.comment = ''
      }
      this.$refs.inputComment.focus()
      setTimeout(() => {
        this.$refs.contentComments.scrollTop = this.$refs.contentComments.scrollHeight
      }, 100)
    }
  },
  name: 'Comments',
  props: [
    'toggleMenu',
    'showComments'
  ],
  watch: {
    showComments () {
      this.$refs.inputComment.focus()
    }
  }
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
    overflow: auto;
  }
  &-commentary {
    input {
      outline: none;
      border-radius: 10px;
      &[type="text"] {
        background-color: rgb(223, 223, 223);
        transition: background-color ease .3s;
        &:hover {
          background-color: rgb(202, 202, 202);
        }
      }
    }
  }
}
.comment{
    &-send {
      &::before {
        font-family: 'icons';
        content: '\e163';
      }
    }
  }
</style>
