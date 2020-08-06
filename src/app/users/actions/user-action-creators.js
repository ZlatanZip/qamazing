import userActionTypes from "../constants/action-types";

export const getUsersActionCreator = (payload) => {
  return {
    type: userActionTypes.GET_USERS_ACTION_TYPE,
    payload,
  };
};

export const setAndSearchSortUsersActionCreator = (payload) => {
  return {
    type: userActionTypes.SEARCH_SET_USERS_ACTION_TYPE,
    payload,
  };
};

export const activateDeactivateUserActionCreator = (payload) => {
  return {
    type: userActionTypes.ACTIVATE_DEACTIVATE_USER_ACTION_TYPE,
    payload,
  };
};
