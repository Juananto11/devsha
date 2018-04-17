'use strict'

import axios from 'axios'

export const registerUser = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL: 'http://localhost:4000/api',
    url: '/auth/register',
    headers: { 'ContentType': 'application/json' },
    data: payload
  })
    .then(res => {
      console.log(res.data.user)
      commit('REGISTER_USER', res.data.user)
      setTimeout(() => {
        commit('TOGGLE_SPPINER')
      }, 500)
    })
    .catch(err => {
      console.error(err)
    })
}

export const validateMail = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL: 'http://localhost:4000/api',
    url: '/auth/validate/:id',
    headers: { 'ContentType': 'application/json' },
    data: {
      idUser: payload
    }
  })
    .then(res => {
      if (res.data.ok) commit('DISBLOCK_BUTTON')
    })
}

export const activateAccount = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL: 'http://localhost:4000/api',
    url: '/auth/activate/:id',
    headers: { 'ContentType': 'application/json' },
    data: {
      idUser: payload
    }
  })
    .then(res => {
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token)
      if (res.data.ok) commit('ACTIVATED_ACCOUNT', res.data.user)
      setTimeout(() => {
        commit('TOGGLE_SPPINER')
      }, 500)
    })
}
