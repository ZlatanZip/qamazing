import APIHitConfig from "../../api/api-hit-config";
import routes from "./route-constants";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

export const getUsers = async (a) => {
  const getUsersUrl = `${URL}${PORT}${routes.GET_USERS_ROUTE}`;

  const usersData = await APIHitConfig.get(getUsersUrl, true);

  return usersData;
};

export const sortAndSearchUsers = async (data) => {
  const getUsersUrl = `${URL}${PORT}${routes.GET_USERS_ROUTE}`;

  const usersData = await APIHitConfig.post(getUsersUrl, data);

  return usersData;
};
