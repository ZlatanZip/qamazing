import { getUsers as handleGetUsers } from "../apiHit/usersAPIHit";
import {
  getUsersActionCreator,
  setAndSearchSortUsersActionCreator,
} from "./usersActionCreators";

export const getUsers = (message) => {
  console.log(message);
  // handleGetUsers(message);
  return async (dispatch) => {
    try {
      const userData = await handleGetUsers(message);
      let action = getUsersActionCreator(userData.data);
      dispatch(action);
    } catch (err) {
      console.log(err.response);
    }
  };
};

/* export const searchAndSortUsers = (data) => {
  console.log(data);
  // handleGetUsers(message);
  return async (dispatch) => {
    try {
      const userData = await handleSearchAndSortUsers(data);
      let action = setAndSearchSortUsersActionCreator(userData.data);
      dispatch(action);
    } catch (err) {
      console.log(err.response);
    }
  };
};
 */
