import AuthenticationService from '../services/AuthenticationService'

export const postUser = (contex, payload) => {
  return AuthenticationService.register(payload).then(contex.commit('NEW_USER', payload))
}
