import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const getProfile = async (username) => {
  console.log("USERNAME RECEIVED:", username);
  console.log("REQUEST URL:", `/api/github/${username}/`);

  try {
    const response = await API.get(`/api/github/${username}/`);
    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("URL:", error.config?.url);
    console.log("DATA:", error.response?.data);
    throw error;
  }
}
export const getRepositories = async (username) => {
  try {
    const response = await API.get(`/api/github/${username}/repos/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching repositories for ${username}:`, error);
    throw error;
  }
};

export const getAnalytics = async (username) => {
  try {
    const response = await API.get(`/api/github/${username}/analytics/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching analytics for ${username}:`, error);
    throw error;
  }
};