import { store } from "../base/store";

class LocalStorageHelper {
  static getAccessToken = () => {
    const accessToken = store.getState().auth.accessToken;
    return accessToken;
  };

  static getRefreshToken = () => {
    const refreshToken = store.getState().auth.refreshToken;
    return refreshToken;
  };
}

export default LocalStorageHelper;
