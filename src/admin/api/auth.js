import { api } from './api'
import axios from 'axios'

export const loginByUsernamePassword = async (username, password) => {
  try {
    const response = await axios.post(`${api}/admin/login`, {
      username: username,
      password: password,
    })

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}
