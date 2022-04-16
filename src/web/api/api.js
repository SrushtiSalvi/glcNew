import axios from 'axios';
export const api = `${process.env.REACT_APP_HOSTNAME}/api`;

export const getAllVacancyPosts = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${api}/vacancy_posts/`, {
      params: {
        page: pageNumber,
        page_size: pageSize,
      },
    });

    if (response.status === 200) {
      if (response.data.success) {
        // reset session storage value
        return response.data;
      }
    } else {
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const getAllNoticePosts = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`${api}/notices/`, {
      params: {
        page: pageNumber,
        page_size: pageSize,
      },
    });

    if (response.status === 200) {
      if (response.data.success) {
        // reset session storage value
        return response.data;
      } else {
        return {
          success: false,
          message: response.data.message,
        };
      }
    } else {
    }
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
export const getPostById = async id => {
  try {
    const response = await axios.get(`${api}/vacancy_posts/get_post/${id}`);

    if (response.status === 200) {
      if (response.data.success) {
        // reset session storage value
        return response.data;
      } else {
        return {
          success: false,
          message: response.data.message,
        };
      }
    } else {
    }
  } catch (err) {
    console.log(err.message);
    // alertBackend(err.message);
    // store in session storage that message sent
    throw err;
  }
};
