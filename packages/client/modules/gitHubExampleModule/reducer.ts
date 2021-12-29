import actionTypes from './actionTypes';

type InitialStateType = {
	fetching: boolean;
	hasError: boolean;
	data: object[];
}

const initialState: InitialStateType = {
  fetching: false,
  hasError: false,
  data: []
};

const gitHubReducer = (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.FETCHING: {
    return {
      fetching: action.fetching
    };
  }
  case actionTypes.FETCH_GH_USERS: {
    return {
      data: action.payload
    };
  }
  default: {
    return state;
  }
  }
};

export default gitHubReducer;