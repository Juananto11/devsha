'use strict'

import axios from 'axios'

import AuthenticationService from '../services/AuthenticationService'

export const registerUser = (context, payload) => {
  axios
    .post('http://localhost:4000/api/auth/register', {
      userName: this.userName,
      email: this.email,
      password: this.password
    })
    .then(res => {
      console.log(res)
      context.commit('REGISTER_USER', res)
    })
    .catch(err => {
      console.log(err)
    })
}
export const postUser = (contex, payload) => {
  return AuthenticationService.register(payload).then(contex.commit('NEW_USER', payload))
}
