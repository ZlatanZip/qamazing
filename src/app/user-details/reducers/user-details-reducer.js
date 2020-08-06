import GET_USER_DETAILS_ACTION_TYPE from "../constants/action-types";

const initialState = {
  userDetails: {},
};

const applyNewState = (state, action) => ({
  ...state,
  authToken: "",
});

const userDetailsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_USER_DETAILS_ACTION_TYPE:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
