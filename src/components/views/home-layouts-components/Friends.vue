<template lang="pug">
  .Friends(@click='dontShowPopovers')
    h2 Tus amigos
    .w-100.d-flex.flex-wrap.justify-content-around
      .cardFriend.py-2.rounded.mb-3.pb-3(v-for='friend in getUser.friends')
        .d-flex.justify-content-around.align-items-center.pb-2
          img(:src='friend.avatar' width='100' height='100')
          .text-right
            p: strong {{ friend.username }}
            p {{ friend.fullName }}
            small {{ friend.email }}
        .d-flex.w-100.justify-content-around
          small 25 publicaciones
          small 335 mensajes
        hr
        .d-flex.justify-content-around
          a.btn.btn-sm.btn-success(@click='toProfileFriend(friend.username)') Ver perfil completo
          a.btn.btn-sm.btn-primary Mandar mensaje
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser'])
  },
  data () {
    return {
      // friends: this.getUser.friends
    }
  },
  methods: {
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    },
    toProfileFriend (toward) {
      this.$router.push(`/profile/${toward}`)
    }
  },
  name: 'Friends'
}
</script>

<style lang="scss" scoped>
.cardFriend {
  width: 400px;
  background-color: #fff;
  box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
}
</style>
