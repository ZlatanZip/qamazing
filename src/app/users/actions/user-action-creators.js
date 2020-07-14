import GET_USERS_ACTION_TYPE from "../constants/action-types";
import SEARCH_SET_USERS_ACTION_TYPE from "../constants/action-types";

export const getUsersActionCreator = (payload) => {
  return {
    type: GET_USERS_ACTION_TYPE,
    payload,
  };
};

export const setAndSearchSortUsersActionCreator = (payload) => {
  return {
    type: SEARCH_SET_USERS_ACTION_TYPE,
    payload,
  };
};
