import AxiosConfig from "../../../apiHit/AxiosConfig";

import LOGIN_ROUTE from "../constants/apiRoute"; //trenutno nepotrebno , nemamo landing

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

const login = async (token) => {
  const loginUrl = `${URL}${PORT}`;
  const loginData = await AxiosConfig.post(loginUrl, { token });
  console.log(loginData);
  return loginData;
};

export default login;
