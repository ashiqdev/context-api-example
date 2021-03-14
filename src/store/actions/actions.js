import { GET_USERS, SET_USER } from './actionTypes';

export const getUsersAction = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

export const setUserAction = (id) => {
  return {
    type: SET_USER,
    payload: id,
  };
};
