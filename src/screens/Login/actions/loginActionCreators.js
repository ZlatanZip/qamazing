import { LOGIN_ACTION_TYPE } from "../constants/actionTypes";

export const loginActionCreator = (data) => {
  return {
    type: LOGIN_ACTION_TYPE,
    data,
  };
};
