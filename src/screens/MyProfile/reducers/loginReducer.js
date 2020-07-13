import { LOGIN_ACTION_TYPE } from "../constants/actionTypes";

const initialState = {
  loggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  console.log(action.data);
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
