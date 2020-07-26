import React, {Component} from "react";
import {Route, Redirect, withRouter} from "react-router-dom";
import {createBrowserHistory} from "history";

import LocalStorageHelper from "../helpers/local-storage-helper";

class RouteHelpers {
  static goToRoute = (path, param) => {
    const query = param ? param : "";
    const history = createBrowserHistory();
    return (window.location = history.createHref(path));
    //history.push({pathname: `${path}`, search: `${query}`});
  };
  //return(window.location = history.createHref(path));
  /*   static goToRoute = (path, param) => {
    return withRouter((props) => {
      const query = param ? param : "";
      console.log(path);
      props.history.push({pathname: `${path}`, search: `${query}`});
    });
  }; */
  /*   withRouter((props) => {
    const {history, children} = props;
    return (
      <div
        onClick={() => {
          history.push("/app/users/add_user");
        }}
      >
        {children}
      </div>
    );
  }); */

  /*  return () =>
      withRouter(
        ({history}) => console.log(history)
        //  history.push({pathname: `${path}`, search: `${query}`})
      ); */
  /*   static goToRoute = (path, param) => {
    const history = createBrowserHistory();
    const query = param ? param : "";
    history.push({pathname: `${path}`, search: `${query}`});
  };
 */
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
          /*  if (roles && roles.includes(userInfo.role) === -1) {
          return <Redirect to={{pathname: "/"}} />;
        }
 */
        }
        return (
          <Route key={key} path={`${url}${path}`} component={component} exact />
        );
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

export default withRouter(RouteHelpers);
