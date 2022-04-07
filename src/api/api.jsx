import axios from 'axios'
export const api = 'http://192.168.0.179:5002/api'

export const getAllVacancyPosts = async (pageNumber, pageSize) => {
    try {
        const response = await axios.get(`${api}/post/vacancy`, {
            params: {
                page: pageNumber,
                page_size: pageSize,
            },
        })

        if (response.status === 200) {
            if (response.data.success) {
                // reset session storage value
                return response.data
            }
        } else {
            return {
                success: false,
                message: 'Something went wrong',
            }
        }
    } catch (err) {
        console.log(err.message)
        // alertBackend(err.message);
        // store in session storage that message sent
        throw err
    }
}
