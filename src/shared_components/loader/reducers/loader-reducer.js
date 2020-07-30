import loaderActionTypes from "../constants/action-types";

const initial_state = {
  loader: false,
};

const loader = (state = initial_state, action) => {
  switch (action.type) {
    case loaderActionTypes.SHOW_LOADER_ACTION:
      return {loader: action.data};

    case loaderActionTypes.HIDE_LOADER_ACTION:
      return {loader: action.data};
    default:
      return state;
  }
};

export default loader;
