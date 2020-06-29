import Axios from "axios";

import registerRoute from "../constants/apiRoute";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_URL;

const dataFromStorage = localStorage.getItem("userData");
let userId;

if (dataFromStorage) {
  const parsedData = JSON.parse(dataFromStorage);
  userId = parsedData.userId;
}

export default register = async (email, password) => {
  const registerUrl = `${URL}${PORT}${registerRoute}`;
  const registerData = await Axios.post(registerUrl, {
    fistName,
    lastName,
    email,
    password,
  });
  return registerData;
};
