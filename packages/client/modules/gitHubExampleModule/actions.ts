import actionTypes from './actionTypes';
import { AppThunk } from '../../src/store';

const setGHUsers = (users: [object]) => ({
  type: actionTypes.FETCH_GH_USERS,
  payload: users
});

const setFetching = (fetching: boolean) => ({
  type: actionTypes.FETCHING,
  fetching: fetching
})

export const getGHUsers = (): AppThunk => async (dispatch) => {
  dispatch(setFetching(true))
  await fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(json => {
      dispatch(setGHUsers(json))
    }).finally(() => dispatch(setFetching(false)));
};