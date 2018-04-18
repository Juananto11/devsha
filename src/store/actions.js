'use strict'

import axios from 'axios'

const baseURL = 'http://localhost:4000'

export const registerUser = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/register',
    headers: { 'ContentType': 'application/json' },
    data: payload
  })
    .then(res => {
      console.log(res.data.user)
      commit('REGISTER_USER', res.data.user)
      commit('TOGGLE_SPINNER', false)
    })
    .catch(err => {
      console.error(err)
    })
}

export const validateMail = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/validate/:id',
    headers: { 'ContentType': 'application/json' },
    data: payload
  })
    .then(res => {
      if (res.data.ok) {
        commit('DISBLOCK_BUTTON')
        commit('TOGGLE_SPINNER', false)
      }
    })
}

export const activateAccount = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/activate/:id',
    headers: { 'ContentType': 'application/json' },
    data: payload
  })
    .then(res => {
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token)
      if (res.data.ok) commit('ACTIVATED_ACCOUNT', res.data.user)
      commit('TOGGLE_SPINNER', false)
    })
}

export const getUserToSession = ({ commit, state }, payload) => {
  axios({
    method: 'get',
    baseURL,
    url: '/',
    headers: {
      'ContentType': 'application/json',
      token: window.localStorage.getItem('token')
    }
  })
    .then(res => {
      commit('REGISTER_USER', res.data)
    })
}

export const modifyData = ({ commit, state }, payload) => {
  console.log('state', payload)
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/modify-data',
    headers: {
      'ContentType': 'application/json',
      token: window.localStorage.getItem('token')
    },
    data: payload
  })
    .then(res => {
      console.log(res)
      commit('REGISTER_USER', res.data)
    })
}
