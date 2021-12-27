import actionTypes from './actionTypes';

const setGHUsers = users => ({
  type: actionTypes.FETCH_GH_USERS,
  payload: users
});

export const getGHUsers = () => async dispatch => {
  await fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(json => dispatch(setGHUsers(json)));
};