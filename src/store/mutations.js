'use strict'

export const REGISTER_SESSION = (state, payload) => {
  state.user = payload
  let token = window.localStorage.getItem('token')
  if (token) {
    window.localStorage.removeItem('token')
  }

  if (payload.token) {
    window.localStorage.setItem('token', payload.token)
  }
}

export const TOGGLE_SPINNER = (state, payload) => {
  state.showSppiner = payload
}

export const DISBLOCK_BUTTON = (state, payload) => {
  state.disblockButton = false
}

export const ACTIVATED_ACCOUNT = (state, payload) => {
  state.user = payload
}

export const REDIRECT = (state, payload) => {
  state.redirect = payload
  setTimeout(() => {
    state.redirect = false
  }, 5000)
}

export const SET_ERROR_USERNAME = (state, payload) => {
  state.errorUsername = payload
}

export const SET_ERROR_EMAIL = (state, payload) => {
  state.errorEmail = payload
}

export const SET_MESSAGE_OF_CHANGE_PASSWORD = (state, payload) => {
  state.messageOfChangePassword = payload
}

export const SET_INCORRECT_LOGIN = (state, payload) => {
  state.incorrectLogin = payload
}

export const DELETE_SESSION = (state) => {
  state.user = {}
  state.errorUsername = ''
  state.errorEmail = ''
  state.messageOfChangePassword = {}
  state.incorrectLogin = {}
  window.localStorage.removeItem('token')
}
