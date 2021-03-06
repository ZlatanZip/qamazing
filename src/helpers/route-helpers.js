import React, {Component} from "react";
import {Route, Redirect, withRouter} from "react-router-dom";

import myHistory from "../base/router/history";
import LocalStorageHelper from "../helpers/local-storage-helper";

class RouteHelpers extends Component {
  static goToRoute = (path, param) => {
    const query = param ? param : "";
    myHistory.push({pathname: `${path}`, search: `${query}`}, {});
  };

  static authorizedRoutesRenderer = (routes) => {
    const userInfo = LocalStorageHelper.getUserInfo();
    if (!userInfo) {
      return <Redirect to={{pathname: "/"}} />;
    }
    return Object.values(routes).map(
      ({fullPath, component, roles, ...rest}, key) => {
        if (roles.includes(userInfo.role))
          return (
            <Route
              {...rest}
              key={key}
              path={fullPath}
              component={component}
              exact
            />
          );
      }
    );
  };

  static routeRenderer = (routes, url) => {
    return Object.values(routes).map((route, key) => {
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

export default withRouter(RouteHelpers);
