import APIHitConfig from "../../api/api-hit-config";
import routes from "./route-constants";

const URL = process.env.REACT_APP_API_PROD_URL;

export const getUsers = async (data) => {
  const getUsersUrl = `${URL}${routes.GET_USERS_ROUTE}`;
  console.log(getUsersUrl);

  const usersData = await APIHitConfig.post(getUsersUrl, data, true);
  console.log(usersData.data.Data.Users);
  return usersData.data.Data.Users;
};

export const sortAndSearchUsers = async (data) => {
  const getUsersUrl = `${URL}${routes.GET_USERS_ROUTE}`;
  const usersData = await APIHitConfig.post(getUsersUrl, data);
  return usersData;
};
