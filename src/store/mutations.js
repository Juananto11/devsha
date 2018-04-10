'use strict'

export const REGISTER_USER = (state, payload) => {
}

export const NEW_USER = (state, payload) => {
  state.user = { ...state.user, ...payload.user }
}
