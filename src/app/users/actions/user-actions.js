import {
  getUsers as handleGetUsers,
  sortAndSearchUsers as handleSearchAndSortUsers,
  activateDeactivateUser as activateDeactivateUserHandler,
} from "../../../apiHit/users/actions";
import {
  getUsersActionCreator,
  setAndSearchSortUsersActionCreator,
  activateDeactivateUserActionCreator,
} from "./user-action-creators";

export const getUsers = (data) => {
  return async (dispatch) => {
    try {
      const userData = await handleGetUsers(data);
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

export const activateDeactivateUser = (data) => {
  return async (dispatch) => {
    try {
      const statusData = await activateDeactivateUserHandler(data);
      let action = activateDeactivateUserActionCreator(statusData);
      dispatch(action);
    } catch (err) {}
  };
};
