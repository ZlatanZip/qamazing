import APIHitConfig from "../../api/api-hit-config";
import routes from "./route-constants";

const URL = process.env.REACT_APP_API_PROD_URL;

export const getUsers = async (data) => {
  const getUsersUrl = `${URL}${routes.GET_USERS_ROUTE}`;
  const usersData = await APIHitConfig.post(getUsersUrl, data, true);
  return usersData.data.Data.Users;
};

export const sortAndSearchUsers = async (data) => {
  const getUsersUrl = `${URL}${routes.GET_USERS_ROUTE}`;
  const usersData = await APIHitConfig.post(getUsersUrl, data);
  return usersData;
};

export const activateDeactivateUser = async (data) => {
  const toggleUserStatusUrl = `${URL}${routes.TOGGLE_USER_STATUS}`;
  const usersData = await APIHitConfig.post(toggleUserStatusUrl, data, true);
  return usersData;
};
