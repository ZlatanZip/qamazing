import axios from "axios";
import LocalStorageHelper from "../helpers/LocalStorageHelper";
import { useHistory } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;

//import router from "./router/router";

axios.interceptors.request.use(
  (config) => {
    const token = LocalStorageHelper.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/* axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    const history = useHistory();

    if (
      error.response.status === 401 &&
      originalRequest.url === `${API_URL}${API_PORT}`
    ) {
      history.push("/");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = LocalStorageHelper.getRefreshToken();
      return axios
        .post("/auth/token", {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            // localStorageService.setToken(res.data);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + LocalStorageHelper.getAccessToken();
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
); */

export default axios;
