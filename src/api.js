import axios from 'axios';

import { logout } from './utils/auth';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
      const { token } = JSON.parse(userDetails);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

//public
export const loginOrRegister = async (data, type) => {
  try {
    return await apiClient.post(`/auth/${type}`, data);
  } catch (error) {
    return {
      isError: true,
      error,
    };
  }
};

//secure
export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/invite', data);
  } catch (error) {
    //if 401 or 403 there is no jwt
    checkResponseCode(error);
    return {
      isError: true,
      error,
    };
  }
};

const checkResponseCode = (error) => {
  const responseCode = error?.response.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
