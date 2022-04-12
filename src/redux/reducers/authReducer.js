import { LOGIN, LOGOUT } from '../actions/actionTypes'

const inititalState = false

const authReducer = (state = inititalState, { type, payload }) => {
  if (type !== undefined) {
    switch (type) {
      case LOGIN:
        localStorage.setItem('access_token', payload)
        return true
      case LOGOUT:
        localStorage.removeItem('access_token')
        return false
      default:
        return state
    }
  }
}

export default authReducer
