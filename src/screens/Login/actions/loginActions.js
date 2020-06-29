import handleLogin from "../apiHit/loginAPIHit";
import setAuthorizationHeader from "../../../helpers/setAuthorizationHeader";
import saveDataToStorage from "../../../helpers/saveDataToLocalStorage";

import { LOGIN_ACTION_TYPE } from "../constants/actionTypes";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const loginData = await handleLogin(email, password);
      const token = `Bearer ${loginData.data.token}`;
      setAuthorizationHeader(token);
      dispatch({
        type: LOGIN_ACTION_TYPE,
        data: loginData,
      });
      saveDataToStorage(loginData.data.token);
    } catch (err) {
      console.log(err.response);
    }
  };
};
