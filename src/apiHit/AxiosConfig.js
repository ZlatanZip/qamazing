import axios from "axios";

export default class AxiosConfig {
  /*   await Axios.get(loginUrl, { data });

  const loginData = await Axios({
    method: "get",
    url: loginUrl,
    responseType: "stream",
  }); */

  static get = (route, payload) => axios({ method: "get", url: route });

  static post = (route, payload) =>
    axios({ method: "post", url: route, payload: payload });
  static delete = (route, payload) => axios({ method: "delete", url: route });
  static put = (route, payload) =>
    axios({ method: "put", url: route, payload: payload });
}
