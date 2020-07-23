import React, {Component} from "react";
import {useHistory, Route, Redirect} from "react-router-dom";

import LocalStorageHelper from "../helpers/local-storage-helper";

class RouteHelpers {
  static goToRoute = (path, param) => {
    const history = useHistory();
    const query = param ? param : "";
    history.push({pathname: `${path}`, search: `${query}`});
  };

  static authorizedRoutesRenderer = ({
    component: Component,
    roles,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) => {
        const userInfo = LocalStorageHelper.getUserInfo;

        return <Component {...props} />;
      }}
    />
  );

  static routeRenderer = (routes, url) => {
    return routes.map((route, key) => {
      return (
        <Route
          key={key}
          path={`${url}${route.path}`}
          component={route.component}
          exact
        />
      );
    });
  };
}

export default RouteHelpers;
