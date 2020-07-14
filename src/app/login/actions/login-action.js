import { login as handleLogin } from "../../../apiHit/login/api-hit/login-api-hit";
import { loginActionCreator } from "./login-action-creators";

export const login = (googleToken) => {
  console.log(googleToken);
  return async (dispatch) => {
    try {
      const apiToken = await handleLogin(googleToken);
      let action = loginActionCreator(apiToken);
      dispatch(action);
    } catch (err) {
      console.log(err.response);
    }
  };
};
