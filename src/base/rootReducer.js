import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import loginReducer from "../screens/Login/reducers/loginReducer";
import registerReducer from "../screens/Register/reducers/registerReducer";
//my change and three way merge
const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  form: formReducer,
});

export default rootReducer;
