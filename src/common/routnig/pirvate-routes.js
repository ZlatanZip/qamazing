import React from "react";
import { Redirect, Route } from "react-router-dom";
import LocalStorageHelper from "../../helpers/local-storage-helper";

const PrivateRoutes = (props) => {
  const { children } = props;
  const token = LocalStorageHelper.getAccessToken();
  return (
    <Route
      render={() => {
        if (!token) {
          return children;
        } else {
          return <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
};

export default PrivateRoutes;
