export const toggleVisible = state => {
  state.isVisible = !state.isVisible
}

export const NEW_USER = (state, payload) => {
  state.user = { ...state.user, ...payload.user }
}
