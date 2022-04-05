import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => ({
  login: (data, history) => dispatch(login(data, history)),
  register: (data, history) => dispatch(register(data, history)),
  setUserDetails: (data) => dispatch(setUserDetails(data)),
});

const setUserDetails = (userDetails) => ({
  type: authActions.SET_USER_DETAILS,
  userDetails,
});

const login = (data, history) => async (dispatch) => {
  const response = await api.loginOrRegister(data, 'login');

  if (response.isError) {
    dispatch(openAlertMessage(response.error.response.data));
  } else {
    const { userDetails } = response.data;
    localStorage.setItem('user', JSON.stringify(userDetails));

    dispatch(setUserDetails(userDetails));
    history.push('/dashboard');
  }
};

const register = (data, history) => async (dispatch) => {
  const response = await api.loginOrRegister(data, 'register');

  if (response.isError) {
    dispatch(openAlertMessage(response.error.response.data));
  } else {
    const { userDetails } = response.data;
    localStorage.setItem('user', JSON.stringify(userDetails));
    dispatch(setUserDetails(userDetails));
    history.push('/dashboard');
  }
};
