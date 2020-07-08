//import { API } from "../../../apiHit/axios";
import Axios from "axios";
import LOGIN_ROUTE from "../constants/apiRoute";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

const login = async (data) => {
  console.log(data);
  const loginUrl = `${URL}${PORT}${LOGIN_ROUTE}`;
  const loginData = await Axios.get(loginUrl, { data });
  return loginData;
};

export default login;
