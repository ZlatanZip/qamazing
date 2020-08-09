import addUserActionTypes from "../constants/action-types";

export const userInviteActionCreator = (data) => {
  return {
    type: addUserActionTypes.INVITE_USER_ACTION_TYPE,
    data,
  };
};

export const addUserActionCreator = (data) => {
  return {
    type: addUserActionTypes.ADD_USER_ACTION_TYPE,
    data,
  };
};
