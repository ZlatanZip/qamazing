import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GlobalWrapper from "./app/global-wrapper/components/global-wrapper";
import {Provider} from "react-redux";
import * as serviceWorker from "./serviceWorker";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./base/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalWrapper />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
