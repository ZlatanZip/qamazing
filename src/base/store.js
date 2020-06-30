import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../base/rootReducer";

const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["authType"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(ReduxThunk));

const persistor = persistStore(store);

export { persistor, store };
