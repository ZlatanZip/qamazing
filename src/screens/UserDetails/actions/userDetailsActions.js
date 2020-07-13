import handleGetUserDetails from "../apiHit/usersAPIHit";
import { getUsersDetailsActionCreator } from "./usersActionCreators";

export const getUserDetails = (message) => {
  console.log(message);

  return async (dispatch) => {
    try {
      const userData = await handleGetUserDetails(message);
      let action = getUsersActionCreator(userData.data);
      dispatch(action);
    } catch (err) {
      console.log(err.response);
    }
  };
};
