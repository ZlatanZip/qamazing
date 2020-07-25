import {store} from "../base/store";
import loading from "../shared_components/loader/actions/loader-actions";

class LocalStorageHelper {
  static getAccessToken = () => {
    const accessToken = store.getState().auth.authField;
    return accessToken;
  };

  static getUserInfo = () => {
    return {
      name: "Zlatan",
      lastName: "Salihagic",
      role: "admin",
      //image:{require('../')}
    };
  };

  static getRefreshToken = () => {
    const refreshToken = store.getState().auth;
    return refreshToken;
  };

  static clearUserData = () => {
    // store.dispatch(setUserInfo({}))
  };

  static showLoader = () => {
    store.dispatch(loading(true));
  };

  static hideLoader = (bool) => {
    store.dispatch(loading(false));
  };
}

export default LocalStorageHelper;
