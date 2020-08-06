import {getUserProfile as getUserProfileHandler} from "../../../apiHit/user-profile/actions";
import {userProfileActionCreator} from "./user-profile-action-creators";

export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      const userProfile = await getUserProfileHandler();
      let action = userProfileActionCreator(userProfile);
      dispatch(action);
    } catch (err) {}
  };
};
