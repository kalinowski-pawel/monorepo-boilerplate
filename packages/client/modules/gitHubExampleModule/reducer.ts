import actionTypes from './actionTypes';

type InitialStateType = {
	fetching: boolean;
	hasError: boolean;
	data: object[];
}

type ActionType = {
	type: string,
	payload: [],
	fetching: boolean
}

const initialState: InitialStateType = {
  fetching: false,
  hasError: false,
  data: []
};

export const gitHubReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
  case actionTypes.FETCHING: {
    return {
      ...state,
      fetching: action.fetching
    };
  }
  case actionTypes.GET_GH_USERS: {
    return {
      ...state,
      data: action.payload
    };
  }
  default: {
    return state;
  }
  }
};