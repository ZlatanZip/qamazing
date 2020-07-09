import GET_USERS_ACTION_TYPE from "../constants/actionTypes";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_ACTION_TYPE:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
