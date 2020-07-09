import GET_USERS_ACTION_TYPE from "../constants/actionTypes";

export const getUsersActionCreator = (payload) => {
  return {
    type: GET_USERS_ACTION_TYPE,
    payload,
  };
};
