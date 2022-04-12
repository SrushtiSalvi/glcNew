import authReducer from './authReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  isLoggedIn: authReducer,
})

export default allReducers
