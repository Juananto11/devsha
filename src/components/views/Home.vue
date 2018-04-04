<template lang="pug">
  .Home
    h1.text-center Home
    chat
</template>

<script>
import Chat from './Chat'
export default {
  name: 'Home',
  components: {
    Chat
  }
}
</script>
