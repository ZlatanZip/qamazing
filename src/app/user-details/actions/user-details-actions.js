import {getUserDetails as handleGetUserDetails} from "../../../apiHit/user-details/actions";
import {getUserDetailsActionCreator} from "./user-detalils-action-creators";

export const getUserDetails = (message) => {
  return async (dispatch) => {
    try {
      const userData = await handleGetUserDetails(message);
      console.log(userData);
      let action = getUserDetailsActionCreator(userData.data.Data);
      dispatch(action);
    } catch (err) {}
  };
};
