import { AUTH_ACTION_TYPE } from "../constants/actionTypes";

const initial_state = {
  authField: null,
};

const applyNewState = (state, action) => ({
  ...state,
  authField: "maziie",
});

const authReducer = (state = initial_state, action) => {
  console.log(action.type);
  switch (action.type) {
    case AUTH_ACTION_TYPE: {
      return applyNewState(state, action);
    }
    default:
      return state;
  }
};

export default authReducer;
