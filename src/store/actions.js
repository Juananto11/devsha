'use strict'

import axios from 'axios'

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
