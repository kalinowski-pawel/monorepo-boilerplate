import { createAsyncThunk } from '@reduxjs/toolkit';
import actionTypes from './actionTypes';

export const getGHUsers = createAsyncThunk(
  `${actionTypes.FETCH_GH_USERS}`,
  async (data ) => {
    const response = await fetch('https://api.github.com/users', {
      method: 'GET'
    });
    return response.json();
  }
);