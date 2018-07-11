<template lang="pug">
  .Posts.d-flex.align-items-start.w-100(@click='dontShowPopovers')
    div.post-container
      CardPost(:showMenu='showMenu')
    FriendsLateral
      span(slot='title') Personas que quiza conozcas
      li.px-4(
        slot='list-friends'
        v-for='friend in suggestionsFriends'
        @click='toProfileFriend(friend)'
      )
        .friend.d-flex.align-items-center
          img.rounded-circle(:src='friend.avatar' width='42' height='42')
          span.ml-2.pl-3.w-100.pb-2
            p.mb-0.font-weight-bold {{ friend.username }}
            small {{ friend.email }}
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

import CardPost from './../home-components/Card-post'
import FriendsLateral from './../home-components/Friends-lateral'

export default {
  components: {
    CardPost,
    FriendsLateral
  },
  created () {
    this.findSuggestionsFromFriends()
  },
  data () {
    return {
      suggestionsFriends: []
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_SPINNER']),
    dontShowPopovers () {
      this.$emit('dontShowPopovers')
    },
    findSuggestionsFromFriends () {
      axios({
        method: 'get',
        baseURL: 'http://localhost:4000',
        url: '/find-suggestions-friends',
        headers: {
          'ContentType': 'application/json',
          token: window.localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log('posts', res.data)
          this.suggestionsFriends = res.data
        })
        .catch(err => {
          if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
        })
    },
    toProfileFriend (friend) {
      console.log(friend.username)
      this.$router.push(`/profile/${friend.username}`)
    }
  },
  mounted () {
    this.TOGGLE_SPINNER(false)
  },
  name: 'Posts',
  props: ['showMenu']
}
</script>

<style lang="scss" scoped>

  </style>
