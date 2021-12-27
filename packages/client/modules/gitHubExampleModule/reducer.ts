import actionTypes from './actionTypes';

type InitialStateType = {
	isFetching: boolean;
	hasError: boolean;
	data: object[];
}

const initialState: InitialStateType = {
  isFetching: false,
  hasError: false,
  data: []
};

const gitHubReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_GH_USERS: {
    return action.payload;
  }
  default: {
    return state;
  }
  }
};

export default gitHubReducer;