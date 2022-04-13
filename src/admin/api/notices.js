import { api } from './api'
import axios from 'axios'

export const getAllNotices = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${api}/notices/`, {
      params: {
        page_no: pageNumber,
        page_size: pageSize,
      },
    })

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}
export const getNoticeById = async (id) => {
  try {
    const response = await axios.get(`${api}/notices/${id}`)

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}

export const addNoticesPost = async (data) => {
  try {
    const response = await axios.post(`${api}/admin/notices/add`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}

export const editNoticesPost = async (data) => {
  try {
    const response = await axios.put(`${api}/admin/notices/edit`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}

export const deleteNoticeById = async (id) => {
  try {
    const response = await axios.delete(`${api}/admin/notices/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}
