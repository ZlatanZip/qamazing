import handleLogin from "../apiHit/loginAPIHit";
import { loginActionCreator } from "./loginActionCreators";

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
