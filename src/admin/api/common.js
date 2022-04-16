import { api } from './api';
import axios from 'axios';

export const addEsteemedRecruiters = async data => {
  try {
    const response = await axios.post(`${api}/admin/common/add_esteemed_recruiters`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const deleteEsteemedRecruiters = async data => {
  try {
    const response = await axios.delete(`${api}/admin/common/delete_esteemed_recruiters`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      data: {
        image_path: data,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const addPastRecruiter = async data => {
  try {
    const response = await axios.post(`${api}/admin/common/add_past_recruiter`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const deletePastRecruiter = async data => {
  try {
    const response = await axios.delete(`${api}/admin/common/delete_past_recruiter`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },

      data,
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};

export const getEsteemedRecruiters = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${api}/common/esteemed_recruiters`, {
      params: {
        page_no: pageNumber,
        page_size: pageSize,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const updateContactDetails = async data => {
  try {
    const response = await axios.put(`${api}/admin/common/contact_details`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const getContactDetails = async () => {
  try {
    const response = await axios.get(`${api}/common/contact_details`);

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const getPastRecruiters = async () => {
  try {
    const response = await axios.get(`${api}/common/past_recruiters`);

    return response.data;
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
