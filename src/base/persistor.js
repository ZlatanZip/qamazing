import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./root-reducer";
import store from "../base/store";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

export default persistReducer(persistConfig, rootReducer);

export const persistore = persistStore(store);
