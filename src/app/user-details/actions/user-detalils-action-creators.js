import GET_USER_DETAILS_ACTION_TYPE from "../constants/action-types";

export const getUserDetailsActionCreator = (payload) => {
  return {
    type: GET_USER_DETAILS_ACTION_TYPE,
    payload,
  };
};
