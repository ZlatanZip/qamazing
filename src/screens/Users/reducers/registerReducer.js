import REGISTER_ACTION_TYPE from "../constants/actionTypes";

const initialState = {
  registered: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ACTION_TYPE:
      return {
        ...state,
        registered: action.data,
      };
    default:
      return state;
  }
};

export default registerReducer;
