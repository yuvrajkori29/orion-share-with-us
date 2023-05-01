import axios from 'axios';
const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}
export const login = async (values) => {
    try  {
        const res = await axios.post(`${API_URI}/login`,values);
        return {
            success: true,
            response: res.data?.response
        }
    } catch (error) {
        console.log('Error while calling the API ', error.message);
        return {
            success: false,
            error: error.response?.data?.error
        };
    }
}
export const signup = async (values) => {
    try  {
        console.log(values);
        const res = await axios.post(`${API_URI}/signup`,values);
        return {
            success: true,
            response: res.data?.response
        }
    } catch (error) {
        console.log('Error while calling the API ', error.message);
        return {
            success: false,
            error: error.response?.data?.error
        };
    }
}

