import addUserActionTypes from "../constants/action-types";

const initialState = {
  userInvited: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case addUserActionTypes.ADD_USER_ACTION_TYPE:
      return {
        ...state,
        users: action.payload,
      };
    case addUserActionTypes.INVITE_USER_ACTION_TYPE:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
