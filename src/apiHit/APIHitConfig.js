import axios from "axios";

export default class APIHitConfig {
  static ApiRequest = (request) => {
    return axios(request)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static get = (url, payload) =>
    APIHitConfig.ApiRequest({ method: "get", url });

  static post = (url, payload) =>
    APIHitConfig.ApiRequest({ method: "post", url, payload });

  static delete = (url, payload) =>
    APIHitConfig.ApiRequest({ method: "delete", url, payload });

  static put = (url, payload) =>
    APIHitConfig.ApiRequest({ method: "put", url, payload });
}
