import { API_URL, TOKEN_USER } from '../const/API';
import  axios  from 'axios';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_USER)}` },
});

export const httpRequest = (config) => {
  return axiosInstance(config);
};
