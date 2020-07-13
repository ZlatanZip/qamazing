import GET_USERS_DETAILS_ACTION_TYPE from "../constants/actionTypes";

export const getUserDetailsActionCreator = (payload) => {
  return {
    type: GET_USERS_DETAILS_ACTION_TYPE,
    payload,
  };
};
