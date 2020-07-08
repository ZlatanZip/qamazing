import store from "../base/store";
import { persistStore } from "redux-persist";

export const persistore = persistStore(store);
