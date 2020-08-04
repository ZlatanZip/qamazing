import {login as handleLogin} from "../../../apiHit/login/actions";
import {loginActionCreator} from "./login-action-creators";

export const login = (data) => {
  return async (dispatch) => {
    try {
      const fetchedUserData = await handleLogin(data);
      let userData = loginActionCreator(fetchedUserData);
      dispatch(userData);
    } catch (err) {}
  };
};

export const googleLogin = (googleToken) => {
  return async (dispatch) => {
    try {
      const apiToken = await handleLogin(googleToken);
      let action = loginActionCreator(apiToken);
      dispatch(action);
    } catch (err) {}
  };
};
