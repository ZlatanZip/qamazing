import {GET_USER_PROFILE_ACTION_TYPE} from "../constants/action-types";

const initialState = {
  userProfileDetails: {},
};

const applyNewState = (state, action) => ({
  ...state,
  authToken: "",
});

const userProfileReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_USER_PROFILE_ACTION_TYPE:
      return {
        ...state,
        userProfileDetails: action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
