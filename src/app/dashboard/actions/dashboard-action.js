import {login as handleLogin} from "../../../apiHit/login/actions";
import {loginActionCreator} from "./login-action-creators";

export const login = (googleToken) => {
  return async (dispatch) => {
    try {
      const apiToken = await handleLogin(googleToken);
      let action = loginActionCreator(apiToken);
      dispatch(action);
    } catch (err) {}
  };
};
