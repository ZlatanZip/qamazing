import {GET_USER_PROFILE_ACTION_TYPE} from "../constants/action-types";

export const userProfileActionCreator = (payload) => {
  console.log(payload);
  return {
    type: GET_USER_PROFILE_ACTION_TYPE,
    payload,
  };
};
