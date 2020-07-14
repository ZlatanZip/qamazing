import APIHitConfig from "../../../api/api-hit-config";
import routes from "../constants/api-routes";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

export const getUsers = async (a) => {
  const getUsersUrl = `${URL}${PORT}${routes.GET_USERS_ROUTE}`;
  console.log(getUsersUrl);
  const usersData = await APIHitConfig.get(getUsersUrl, true);
  console.log(getUsersUrl);
  return usersData;
};

export const sortAndSearchUsers = async (data) => {
  console.log(data);
  const getUsersUrl = `${URL}${PORT}${routes.GET_USERS_ROUTE}`;
  console.log(getUsersUrl);
  const usersData = await APIHitConfig.post(getUsersUrl, data);
  console.log(usersData);
  return usersData;
};
