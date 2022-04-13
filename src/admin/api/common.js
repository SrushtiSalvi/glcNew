import { api } from './api'
import axios from 'axios'

export const addEsteemedRecruiters = async (data) => {
  try {
    const response = await axios.post(
      `${api}/admin/common/add_esteemed_recruiters`,
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
export const deleteEsteemedRecruiters = async (data) => {
  try {
    const response = await axios.delete(
      `${api}/admin/common/delete_esteemed_recruiters`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        data: {
          image_path: data,
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

export const getEsteemedRecruiters = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${api}/common/esteemed_recruiters`, {
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
