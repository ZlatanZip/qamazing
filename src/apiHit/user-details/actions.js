import APIHitConfig from "../../api/api-hit-config";
import routes from "./route-constants";

const URL = process.env.REACT_APP_API_PROD_URL;

export const getUserDetails = async (userId) => {
  const getUserDetailsUrl = `${URL}${routes.GET_USER_DETAIL_ROUTE}${userId}`;
  console.log(getUserDetailsUrl);

  const usersData = await APIHitConfig.get(getUserDetailsUrl, true);
  console.log(usersData);
  return usersData;
};
