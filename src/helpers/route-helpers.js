import React, {Component} from "react";
import {Route, Redirect, withRouter} from "react-router-dom";

import myHistory from "../base/router/history";
import LocalStorageHelper from "../helpers/local-storage-helper";

class RouteHelpers extends Component {
  static goToRoute = (path, param) => {
    const query = param ? param : "";
    myHistory.push({pathname: `${path}`, search: `${query}`}, {});
  };

  static authorizedRoutesRenderer = (
    {path, component, roles, ...rest},
    key
  ) => (
    <Route
      {...rest}
      render={(props) => {
        const userInfo = LocalStorageHelper.getUserInfo();

        const url = "/app";
        if (!userInfo) {
          return <Redirect to={{pathname: "/"}} />;
        }

        {
          if (roles && roles.includes(userInfo.role) === -1) {
            return <Redirect to={{pathname: "/"}} />;
          }
        }
        return (
          <Route key={key} path={`${url}${path}`} component={component} exact />
        );
      }}
    />
  );

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
