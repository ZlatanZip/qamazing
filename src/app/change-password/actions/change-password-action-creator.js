import { LOGIN_ACTION_TYPE } from "../constants/action-types";

export const loginActionCreator = (data) => {
  return {
    type: LOGIN_ACTION_TYPE,
    data,
  };
};
