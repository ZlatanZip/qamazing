import {
  getUsers as handleGetUsers,
  sortAndSearchUsers as handleSearchAndSortUsers,
} from "../../../apiHit/users/actions";
import {
  getUsersActionCreator,
  setAndSearchSortUsersActionCreator,
} from "./user-action-creators";

export const getUsers = (data) => {
  return async (dispatch) => {
    try {
      const userData = await handleGetUsers(data);
      console.log(userData);
      let action = getUsersActionCreator(userData);
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
