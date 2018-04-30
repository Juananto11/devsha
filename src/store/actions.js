'use strict'

import axios from 'axios'

const baseURL = 'http://localhost:4000'

// Connections to Auth (Registern, login, etc)
export const registerUser = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/register',
    headers: { 'ContentType': 'application/json' },
    data: payload
  })
    .then(res => {
      console.log(res.data.id)
      if (res.data.ok) {
        commit('REDIRECT', true)
        commit('TOGGLE_SPINNER', false)
      } else {
        commit('TOGGLE_SPINNER', false)
        if (res.data.failed === 'username') commit('SET_ERROR_USERNAME', res.data.message)
        if (res.data.failed === 'email') commit('SET_ERROR_EMAIL', res.data.message)
      }
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}

export const validateMail = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/validate/:id',
    headers: { 'ContentType': 'application/json' },
    data: { id: payload }
  })
    .then(res => {
      if (res.data.ok) {
        commit('DISBLOCK_BUTTON')
        commit('TOGGLE_SPINNER', false)
      } else {
        console.log(res.data)
      }
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}

export const activateAccount = ({ commit }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/activate/:id',
    headers: { 'ContentType': 'application/json' },
    data: { id: payload }
  })
    .then(res => {
      commit('REGISTER_SESSION', res.data)
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}

export const login = ({ commit, state }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/login',
    headers: { 'ContentType': 'application/json' },
    data: payload
  })
    .then(res => {
      console.log(res.data)
      if (res.data.ok) {
        commit('REGISTER_SESSION', res.data)
        commit('TOGGLE_SPINNER', false)
      } else {
        commit('SET_INCORRECT_LOGIN', res.data)
        commit('TOGGLE_SPINNER', false)
      }
      setTimeout(() => {
        commit('SET_INCORRECT_LOGIN', {})
      }, 8000)
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}

export const modifyData = ({ commit, state }, payload) => {
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
      commit('REGISTER_SESSION', res.data)
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}

export const resetPassword = ({ commit, state }, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/api/auth/reset-password',
    headers: {
      'ContentType': 'application/json',
      token: window.localStorage.getItem('token')
    },
    data: payload
  })
    .then(res => {
      commit('SET_MESSAGE_OF_CHANGE_PASSWORD', res.data)
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}

// Connections to get users
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
      // console.log(res.data)
      commit('REGISTER_SESSION', res.data)
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}

export const addToMyFriend = ({commit, state}, payload) => {
  axios({
    method: 'post',
    baseURL,
    url: '/user/add-friend',
    headers: {
      'ContentType': 'application/json',
      token: window.localStorage.getItem('token')
    },
    data: payload
  })
    .then(res => {
      console.log(res)
      commit('REGISTER_SESSION', res.data)
      commit('TOGGLE_SPINNER', false)
    })
    .catch(err => {
      if (err) console.log('Por el momento no podemos procesar sus datos intente más tarde Gracias')
    })
}
