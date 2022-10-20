import { combineReducers } from '@reduxjs/toolkit';

import { gitHubReducer } from './gitHubExampleModule/reducer';

const rootReducer = combineReducers({
  gitHub: gitHubReducer
});

export default rootReducer;
