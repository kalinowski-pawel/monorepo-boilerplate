import { configureStore, ThunkAction, Action, bindActionCreators } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from '../modules/reducers';

const ENABLE_LOGGER = false;

export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return ENABLE_LOGGER ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware()
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
    >

export default store;
