import APIHitConfig from "../../api/api-hit-config";
import routes from "./route-constants";

const URL = process.env.REACT_APP_API_PROD_URL;

export const getUserProfile = async () => {
  const getUserProfileUrl = `${URL}${routes.GET_USER_PROFILE_ROUTE}`;
  console.log(getUserProfileUrl);

  const usersData = await APIHitConfig.get(getUserProfileUrl, true);

  return usersData.data.Data;
};
