import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import loginReducer from "../screens/Login/reducers/loginReducer";
import usersReducer from "../screens/Users/reducers/usersReducer";
import authReducer from "../screens/Login/reducers/authReducer";
import registerReducer from "../screens/Register/reducers/registerReducer";
//my change and three way merge
const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
  auth: authReducer,
  registerReducer,
  form: formReducer,
});

export default rootReducer;
