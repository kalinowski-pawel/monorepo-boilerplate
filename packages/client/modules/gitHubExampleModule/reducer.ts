import { createReducer } from '@reduxjs/toolkit'
import actionTypes from './actionTypes';
import { getGHUsers } from './actions';

type InitialStateType = {
    isFetching: boolean;
    hasError: boolean;
    data: object[];
}

const initialState: InitialStateType = {
  isFetching: false,
  hasError: false,
  data: []
}

const gitHubReducer = createReducer(initialState, builder => {
  builder
    .addCase(getGHUsers.fulfilled, (state, action) => {
      console.log('getUsers', action.payload);
      state.data.push(action.payload)
    }).addCase(actionTypes.FETCH_GH_USER, (state, action) => {
      console.log('getUser', action.payload);
    }).addDefaultCase((state, action) => {
      return state;
    })
})

export default gitHubReducer;