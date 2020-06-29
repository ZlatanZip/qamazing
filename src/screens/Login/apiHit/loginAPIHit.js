import Axios from "axios";

import loginRoute from "../constants/apiRoute";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_URL;

const dataFromStorage = localStorage.getItem("userData");
let userId;

if (dataFromStorage) {
  const parsedData = JSON.parse(dataFromStorage);
  userId = parsedData.userId;
}

export default login = async (email, password) => {
  const loginUrl = `${URL}${PORT}${loginRoute}`;
  const loginData = await Axios.post(loginUrl, { login, password });
  return loginData;
};
