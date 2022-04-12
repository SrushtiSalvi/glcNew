import { LOGIN, LOGOUT } from './actionTypes'

export const login = (payload) => ({
  type: LOGIN,
  payload: payload,
})

export const logout = () => ({
  type: LOGOUT,
})
