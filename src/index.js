import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./base/router/router";
import {Provider} from "react-redux";
import * as serviceWorker from "./serviceWorker";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./base/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
