import handleRegistration from "../apiHit/registerAPIHit";
import setAuthorizationHeader from "../../../helpers/setAuthorizationHeader";
import saveDataToStorage from "../../../helpers/saveDataToLocalStorage";

import { REGISTER_ACTION_TYPE } from "../constants/actionTypes";

export const register = (data) => {
  return async (dispatch) => {
    try {
      const registerData = await handleRegistration(data);
      const token = `Bearer ${registerData.data.token}`;

      setAuthorizationHeader(token);
      dispatch({
        type: REGISTER_ACTION_TYPE,
        data: registerData.data,
      });
      saveDataToStorage(registerData.data.token);
    } catch (err) {
      // do something with message!
      console.log(err.response);
    }
  };
};
