import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {routerReducer as routing} from "react-router-redux";

import loaderReducer from "../shared_components/loader/reducers/loader-reducer";
import loginReducer from "../app/login/reducers/login-reducer";
import usersReducer from "../app/users/reducers/user-reducer";
import authReducer from "../app/login/reducers/auth-reducer";
import registerReducer from "../app/register/reducers/register-reducer";
import userDetails from "../app/user-details/reducers/user-details-reducer";
//my change and three way merge
const rootReducer = combineReducers({
  loader: loaderReducer,
  login: loginReducer,
  users: usersReducer,
  userDetails: userDetails,
  auth: authReducer,
  registerReducer,
  form: formReducer,
  routing,
});

export default rootReducer;
