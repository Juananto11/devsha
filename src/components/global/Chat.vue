<template lang="pug">
  .Chat(@click='dontShowPopovers')
    .chats
      .chats-sent(
        v-for='user in usersConnected',
        v-if='user.chatting'
        ref='containerChat'
      )
        .chats-sent-title.px-3.py-1.d-flex.justify-content-between.align-items-center.bg-success(@click='toggleChat(user.name)')
          span Chateando con {{ user.name }}
          span(@click='closeChat(user.name)') Cerrar
        .chats-sent-body.bg-primary(:class='{"chats-sent-body-extended": user.showMessages}')
          .list-messages(ref='chats')
            ul.list-messages-container.m-0.w-100.px-2.list-unstyled
              li.list-messages-item.d-flex.flex-row-reverse.align-items-center.mb-1(v-for='message in user.messages')
                img.ml-3(src='' width='24' height='24')
                span.w-100.text-right {{ message.message }}
                small {{ message.hour() }}
          .message.d-flex.w-100
            input.message-input.w-100.px-2(
              type="text"
              v-model='user.message'
              ref='inputMessage'
              @keypress.enter='sendMessage(user.name)'
            )
            button.message-send(@click='sendMessage(user.name)')
    .user-connected
      .user-connected-title.px-3.py-1.d-flex.justify-content-between.bg-danger(@click='toggleConnected')
        span Conectados
        small {{ usersConnected.length }}
      .user-connected-body.bg-primary(:class='{"user-connected-show": showConnected}')
        ul.list-unstyled.m-0
          li.mb-1(
            v-for='user in usersConnected',
            @click='showChat(user.name)'
          )
            img.mx-3(src='' width='24' height='24')
            span {{ user.name }}
</template>

<script>
export default {
  data () {
    return {
      showConnected: false,
      usersConnected: [
        {
          chatting: false,
          message: '',
          messages: [],
          name: 'USUARIO 1',
          showMessages: false
        },
        {
          chatting: false,
          message: '',
          messages: [],
          name: 'USUARIO 2',
          showMessages: false
        },
        {
          chatting: false,
          message: '',
          messages: [],
          name: 'USUARIO 3',
          showMessages: false
        },
        {
          chatting: false,
          message: '',
          messages: [],
          name: 'USUARIO 4',
          showMessages: false
        },
        {
          chatting: false,
          message: '',
          messages: [],
          name: 'USUARIO 5',
          showMessages: false
        },
        {
          chatting: false,
          message: '',
          messages: [],
          name: 'USUARIO 6',
          showMessages: false
        }
      ]
    }
  },
  methods: {
    closeChat (userName) {
      this.usersConnected.forEach(user => {
        if (userName === user.name) {
          user.chatting = false
        }
      })
    },
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    },
    sendMessage (userName) {
      let user = this.usersConnected.find(user => {
        if (user.name === userName) return user
      })
      if (user.message.trim()) {
        user.messages.push({
          message: user.message,
          user: user.name,
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
        user.message = ''
      }
      this.$refs.inputMessage.forEach(input => input.focus())
      this.$refs.chats.forEach(chat => {
        setTimeout(() => {
          chat.scrollTop = chat.scrollHeight
        }, 100)
      })
    },
    showChat (userName) {
      this.usersConnected.forEach(user => {
        if (userName === user.name) {
          setTimeout(() => {
            user.chatting = true
          }, 200)
          setTimeout(() => {
            user.showMessages = true
          }, 500)
        } else if (userName !== user.name) {
          user.showMessages = false
        }
      })
      this.showConnected = false
      setTimeout(() => {
        this.$refs.inputMessage.forEach(input => input.focus())
      }, 500)
    },
    toggleConnected () {
      this.showConnected = !this.showConnected
      this.usersConnected.forEach(user => {
        user.showMessages = false
      })
    },
    toggleChat (userName) {
      this.usersConnected.forEach(user => {
        if (userName === user.name) {
          user.showMessages = !user.showMessages
          this.showConnected = false
        } else if (userName !== user.name) {
          user.showMessages = false
        }
      })
      setTimeout(() => {
        this.$refs.containerChat.forEach((chat, c) => {
          if (chat.clientHeight === 332) {
            this.$refs.inputMessage.forEach((input, i) => {
              if (c === i) {
                input.focus()
              }
            })
          }
        })
      }, 400)
    }
  },
  name: 'Chat'
}
</script>

<style lang="scss" scoped>
  .Chat {
    position: fixed;
    width: 448px;
    bottom: 0;
    right: 42px;
  }
  .user-connected {
    &-body {
      height: 0;
      overflow: hidden;
      transition: height ease .2s;
      overflow-y: scroll;
    }
    &-show {
      height: 160px;
      padding: 8px 0;
    }
  }
  .chats-sent-body {
    height: 0;
    transition: height ease .2s;
    overflow-y: hidden;
    position: relative;
    &-extended {
      height: 300px;
    }
  }
  .list-messages {
    overflow-y: auto;
    position: relative;
    height: 268px;
    &-container {
      position: absolute;
      bottom: 0;
      min-height: 0;
      max-height: 268px;
    }
    &-item {
      min-height: 1.5em;
    }
  }
  .message{
    &-input {
      outline: none;
    }
    &-send {
      &::before {
        font-family: 'icons';
        content: '\e163';
      }
    }
  }
</style>
