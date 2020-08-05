import axios from "axios";
import LocalStorageHelper from "../helpers/local-storage-helper";

export default class APIHitConfig {
  static setAuthorizationHeader = (bearer_token) => {
    const bearer = "Bearer " + bearer_token;
    const headers = {
      Authorization: bearer,
      "Content-Type": "application/json",
    };
    return headers;
  };

  static ApiRequest = (request, showLoaderBoolean) => {
    const bearer_token = LocalStorageHelper.getAccessToken();
    const authorization = APIHitConfig.setAuthorizationHeader(bearer_token);
    request.headers = authorization;
    request.payload = JSON.stringify(request.payload);
    console.log(request);
    showLoaderBoolean && LocalStorageHelper.showLoader();

    return axios(request)
      .then((res) => {
        showLoaderBoolean && LocalStorageHelper.hideLoader();

        return res;
      })
      .catch((err) => {
        showLoaderBoolean && LocalStorageHelper.hideLoader();

        console.log(err);
      });
  };

  static get = (url, loaderBoolean) =>
    APIHitConfig.ApiRequest({method: "get", url}, loaderBoolean);

  static post = (url, data, loaderBoolean) =>
    APIHitConfig.ApiRequest({method: "post", url, data}, loaderBoolean);

  static delete = (url, loaderBoolean) =>
    APIHitConfig.ApiRequest({method: "delete", url}, loaderBoolean);

  static put = (url, data, loaderBoolean) =>
    APIHitConfig.ApiRequest({method: "put", url, data}, loaderBoolean);
}
