import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const getProfile = async (username) => {
  try {
    const response = await API.get(`/api/github/${username}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching profile for ${username}:`, error);
    throw error;
  }
};

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