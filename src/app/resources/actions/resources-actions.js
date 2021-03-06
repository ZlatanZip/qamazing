import {
  getUsers as handleGetUsers,
  sortAndSearchUsers as handleSearchAndSortUsers,
} from "../apiHit/users-api-hit";
import {
  getUsersActionCreator,
  setAndSearchSortUsersActionCreator,
} from "./user-action-creators";

export const getUsers = (message) => {
  // handleGetUsers(message);
  return async (dispatch) => {
    try {
      const userData = await handleGetUsers(message);
      let action = getUsersActionCreator(userData.data);
      dispatch(action);
    } catch (err) {}
  };
};

export const searchAndSortUsers = (data) => {
  return async (dispatch) => {
    try {
      const userData = await handleSearchAndSortUsers(data);
      let action = setAndSearchSortUsersActionCreator(userData.data);
      dispatch(action);
    } catch (err) {}
  };
};
