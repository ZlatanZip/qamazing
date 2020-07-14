import APIHitConfig from "../../../apiHit/APIHitConfig";
import routes from "../constants/api-routes";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

const getUserDetalis = async (a) => {
  const getUserDetailsUrl = `${URL}${PORT}${routes.GET_USERS_DETAILS_ROUTE}`;
  console.log(getUserDetailsUrl);
  const usersData = await APIHitConfig.get(getUserDetailsUrl, true);
  console.log(usersData);
  return usersData;
};

export default getUserDetalis;
