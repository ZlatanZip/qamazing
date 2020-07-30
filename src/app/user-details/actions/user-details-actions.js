import handleGetUserDetails from "../api-hit/users-api-hit";
import {getUserDetailsActionCreator} from "./user-action-creators";

export const getUserDetails = (message) => {
  return async (dispatch) => {
    try {
      const userData = await handleGetUserDetails(message);
      let action = getUserDetailsActionCreator(userData.data);
      dispatch(action);
    } catch (err) {}
  };
};
