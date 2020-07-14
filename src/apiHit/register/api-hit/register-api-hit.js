import Axios from "axios";

import registerRoute from "../constants/apiRoute";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_URL;

export const register = async (data) => {
  const registerUrl = `${URL}${PORT}${registerRoute}`;
  const registerData = await Axios.post(registerUrl, { data });
  return registerData;
};
