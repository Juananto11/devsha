'use strict'

export const REGISTER_USER = (state, payload) => {
  state.user = payload
}

export const TOGGLE_SPPINER = (state, payload) => {
  setTimeout(() => {
    state.showSppiner = !state.showSppiner
  }, 500)
}

export const DISBLOCK_BUTTON = (state, payload) => {
  state.disblockButton = false
}

export const ACTIVATED_ACCOUNT = (state, payload) => {
  state.user = payload
}
