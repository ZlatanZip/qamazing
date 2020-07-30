import handleLogin from "../apiHit/my-profile-api-hit";
import {loginActionCreator} from "./loginActionCreators";

export const login = (googleToken) => {
  return async (dispatch) => {
    try {
      const apiToken = await handleLogin(googleToken);
      let action = loginActionCreator(apiToken);
      dispatch(action);
    } catch (err) {}
  };
};
