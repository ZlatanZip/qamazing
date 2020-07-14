import { AUTH_ACTION_TYPE } from "../constants/action-types";

const initial_state = {
  accessToken: "my amazing save token",
};

const applyNewState = (state, action) => ({
  ...state,
  authToken: "",
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
