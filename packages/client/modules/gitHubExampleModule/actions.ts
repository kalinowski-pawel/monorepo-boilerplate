import services from '../../services';
import { AppThunk } from '../../src/store';
import actionTypes from './actionTypes';

const setGHUsers = (users: [object]) => ({
  type: actionTypes.GET_GH_USERS,
  payload: users,
});

const setFetching = (fetching: boolean) => ({
  type: actionTypes.FETCHING,
  fetching: fetching,
});

export const getGHUsers = (): AppThunk => async (dispatch) => {
  dispatch(setFetching(true));
  try {
    const response = await services.gitHubService.getUsers('https://api.github.com/users');
    dispatch(setGHUsers(response));
    dispatch(setFetching(false));
  } catch (e) {
    dispatch(setFetching(false));
  }
};
