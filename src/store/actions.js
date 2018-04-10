'use strict'

import axios from 'axios'

export const registerUser = (contex, payload) => {
  axios.post('http://localhost:4000/api/auth/register')
}
