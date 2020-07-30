import {LOGIN_ACTION_TYPE} from "../constants/action-types";

const initialState = {
  loggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPE:
      return {
        ...state,
        loggedIn: action.data,
      };
    default:
      return state;
  }
};

export default loginReducer;
