import React, {Component} from "react";
import {connect} from "react-redux";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import history from "../history/history";

import PrivateWrapper from "../../wrapper-private/components/wrapper-private";
import PublicWrapper from "../../wrapper-public/components/wrapper-public";

import routeConstants from "../../../common/routes/routes";

import RouteHelpers from "../../../helpers/route-helpers";

import "../styles/style.css";

const Routers = () => {
  /*  const his = 
  const urlLisntener = history.listen((props) => {
    console.log(props.location.pathname);
  }); */
  return (
    <Router history={history}>
      <Route
        path='/'
        render={({history, match: {url}}) => (
          <>
            <PublicWrapper url={url} history={history}>
              <Switch>
                {RouteHelpers.routeRenderer(routeConstants.publicRoutes, url)}
              </Switch>
            </PublicWrapper>
            <Route
              path='/app'
              render={({match: {url}}) => (
                <>
                  <PrivateWrapper url={url} history={history}>
                    <Switch>
                      {RouteHelpers.routeRenderer(
                        routeConstants.privateRoutes,
                        url
                      )}
                    </Switch>
                  </PrivateWrapper>
                </>
              )}
            />
          </>
        )}
      />
    </Router>
  );
};

export default Routers;
