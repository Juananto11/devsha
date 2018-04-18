'use strict'

export const REGISTER_USER = (state, payload) => {
  state.user = payload
}

export const TOGGLE_SPINNER = (state, payload) => {
  setTimeout(() => {
    state.showSppiner = payload
  }, 500)
}

export const DISBLOCK_BUTTON = (state, payload) => {
  state.disblockButton = false
}

export const ACTIVATED_ACCOUNT = (state, payload) => {
  state.user = payload
}
