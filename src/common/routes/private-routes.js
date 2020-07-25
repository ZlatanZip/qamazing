import React from "react";
import {Redirect, Route} from "react-router-dom";
import LocalStorageHelper from "../../helpers/local-storage-helper";
import RouteHelpers from "../../helpers/route-helpers";

const PrivateRoutes = (props) => {
  const {children} = props;
  const token = LocalStorageHelper.getAccessToken();
  return (
    <Route
      render={() => {
        if (token) {
          return children;
        } else {
          RouteHelpers.goToRoute();
        }
      }}
    />
  );
};

export default PrivateRoutes;
