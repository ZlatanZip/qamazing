import APIHitConfig from "../../../apiHit/APIHitConfig";
import routes from "../constants/apiRoutes";

const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

const getUsers = async (a) => {
  const getUsersUrl = `${URL}${PORT}${routes.GET_USERS_ROUTE}`;
  console.log(getUsersUrl);
  const usersData = await APIHitConfig.get(getUsersUrl, true);
  console.log(getUsersUrl);
  return usersData;
};

export default getUsers;
