<template lang="pug">
  .container-chat(v-if="!closeChat")
    chat-header
      h4.m-0(slot="header", @click="hideChat = !hideChat") Header chat
      span.mr-2(slot="close", @click="closeChat = true") x
    chat-body(v-show="hideChat")
</template>

<script>
import ChatHeader from './chat-components/Chat-header'
import ChatBody from './chat-components/Chat-body'
export default {
  name: 'chat',
  components: {
    ChatHeader,
    ChatBody
  },
  data () {
    return {
      hideChat: false,
      closeChat: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container-chat {
  border: 1px solid lightgray;
  width: 250px;
  position: absolute;
  right: 30px;
  bottom: 0;

  h4,
  span {
    cursor: pointer;
  }
}
</style>
