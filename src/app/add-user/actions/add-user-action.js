import {
  addUser as handleAddUser,
  inviteUser as handleInviteUser,
} from "../../../apiHit/add-user/actions";
import {
  addUserActionCreator,
  userInviteActionCreator,
} from "./add-user-action-creators";

export const inviteUsers = (data) => {
  return async (dispatch) => {
    try {
      const userInviteData = await handleInviteUser(data);
      let action = userInviteActionCreator(userInviteData);
      dispatch(action);
    } catch (err) {}
  };
};

export const addUser = (data) => {
  return async (dispatch) => {
    try {
      const apiToken = await handleAddUser(data);
      let action = addUserActionCreator(apiToken);
      dispatch(action);
    } catch (err) {}
  };
};
