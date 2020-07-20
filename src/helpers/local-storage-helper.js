import {store} from "../base/store";
import loading from "../shared_components/loader/actions/loader-actions";

class LocalStorageHelper {
  static getAccessToken = () => {
    const accessToken = store.getState().auth.authField;
    return accessToken;
  };

  static getRefreshToken = () => {
    const refreshToken = store.getState().auth;
    return refreshToken;
  };

  static showLoader = () => {
    store.dispatch(loading(true));
  };

  static hideLoader = (bool) => {
    store.dispatch(loading(false));
  };
}

export default LocalStorageHelper;
