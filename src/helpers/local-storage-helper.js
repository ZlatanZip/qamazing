import {store} from "../base/store";
import loading from "../shared_components/loader/actions/loader-actions";

class LocalStorageHelper {
  static getAccessToken = () => {
    const accessToken =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY1YjNmZWFhZDlkYjBmMzhiMWI0YWI5NDU1M2ZmMTdkZTRkZDRkNDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NjgyNzM5MDE2NDAtaWs4M2RtdjR1cTRudmhjZ2thYnZsNjlndGZhbDFvczguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NjgyNzM5MDE2NDAtaWs4M2RtdjR1cTRudmhjZ2thYnZsNjlndGZhbDFvczguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDAxMzUzNjQ4OTcyMzQwNzE0MjkiLCJlbWFpbCI6ImFtaW5hYmFsYXZhYzk2QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiZmdoR0RsWHpoNk5DUkEyeVNFa3NyUSIsImlhdCI6MTU5NDE4OTkxMywiZXhwIjoxNTk0MTkzNTEzfQ.GKvx77XUp1T86VifEOoCigofDgk0KFzuYOPMjyZcyWtNEdTvRMHdyg1-hTa2DdxghKb6vR78qz5-9RIimzRQj4trL0RNNES9DSDPTb1uIK99WSNlDVnCDXlNBtlTSFnNl9tYMtVEufGcGRZnwtX9mAhmchw_IpIGQxlCo5i535-qT2w8iKZys25KpHvi06sgl3N75tQ6wo2tbmGGaspu2bLeShCq7GGTkAnD3Kl_iLr0b53UeCeXNpQOlAZ78NjvR6OiZaRXQbk-JX7Ok8c04yOswkleG9718AqPu3Rh--h9mjHmGWxklX5MXceW3u-2xm01mhYHLUkLAUhOG8rTow";
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
