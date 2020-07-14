import APIHitConfig from "../../../apiHit/APIHitConfig";

import LOGIN_ROUTE from "../../../app/my-profile/constants/apiRoute"; //trenutno nepotrebno , nemamo landing

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

const login = async (token) => {
  const loginUrl = `${URL}${PORT}`;
  const loginData = await APIHitConfig.post(loginUrl, { token });
  console.log(loginData);
  return loginData;
};

export default login;
