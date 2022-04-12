import { api } from './api'
import axios from 'axios'

export const getAllVacancyPosts = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${api}/vacancy_posts/`, {
      params: {
        page: pageNumber,
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

export const addVacancyPost = async (data) => {
  try {
    const response = await axios.post(`${api}/admin/vacancy_posts/add`, data, {
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

export const editVacancyPost = async (data) => {
  try {
    const response = await axios.post(`${api}/admin/vacancy_posts/edit`, data, {
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

export const updateImage = async (data) => {
  try {
    const response = await axios.put(
      `${api}/admin/vacancy_posts/update_image`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}

export const deletePostById = async (id) => {
  try {
    const response = await axios.delete(
      `${api}/admin/vacancy_posts/delete/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )

    return response.data
  } catch (err) {
    console.log(err.message)
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err
  }
}
