export const getDisblockButton = state => {
  return state.disblockButton
}

export const getUser = state => {
  return state.user
}

export const showSppiner = state => {
  return state.showSppiner
}

export const getErrorUsername = state => {
  return state.errorUsername
}

export const getErrorEmail = state => {
  return state.errorEmail
}

export const getRedirect = state => {
  return state.redirect
}

export const getRegistry = state => {
  let x = new Date(state.user.registry.split('.')[0])
  let months = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre'
  }
  let year = x.getFullYear()
  let month = x.getMonth()
  let date = x.getDate().toString().length < 2 ? `0${x.getDate()}` : x.getDate()
  let hour = x.getHours().toString().length < 2 ? `0${x.getHours()}` : x.getHours()
  let minutes = x.getMinutes().toString().length < 2 ? `0${x.getMinutes()}` : x.getMinutes()
  let seconds = x.getSeconds().toString().length < 2 ? `0${x.getSeconds()}` : x.getSeconds()

  return `${date} de ${months[month]} de ${year} a las ${hour}:${minutes}:${seconds}`
}

export const getMessageOfChangePassword = state => {
  return state.messageOfChangePassword
}

export const getIncorrectLogin = state => {
  return state.incorrectLogin
}
