import Axios from "axios";

import loginRoute from "../screens/Login/constants/apiRoute";

const URL = "http://localhost:";
const PORT = "3100";

const dataFromStorage = localStorage.getItem("userData");
let userId;

if (dataFromStorage) {
  const parsedData = JSON.parse(dataFromStorage);
  userId = parsedData.userId;
}

const login = async (data) => {
  const loginUrl = `http://localhost:3100`;
  const loginData = await Axios.get(loginUrl, { data });
  return loginData;
};

export default login;
