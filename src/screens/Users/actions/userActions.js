import handleGetUsers from "../apiHit/usersAPIHit";
import { getUsersActionCreator } from "./usersActionCreators";

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
