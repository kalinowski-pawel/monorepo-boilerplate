import actionTypes from './actionTypes';

const setGHUsers = users => ({
  type: actionTypes.FETCH_GH_USERS,
  payload: users
});

const setFetching = fetching => ({
  type: actionTypes.FETCHING,
  fetching
})

export const getGHUsers = () => async dispatch => {
  dispatch(setFetching(false))
  await fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(json => {
      dispatch(setGHUsers(json))
    }).finally(dispatch(setFetching(true)));


};