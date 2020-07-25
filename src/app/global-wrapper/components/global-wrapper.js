import React, {Component} from "react";
import {connect} from "react-redux";
import {createBrowserHistory} from "history";

import {Route, BrowserRouter, Switch} from "react-router-dom";

import PrivateWrapper from "../../wrapper-private/components/wrapper-private";
import PublicWrapper from "../../wrapper-public/components/wrapper-public";

import routeConstants from "../../../common/routes/routes";

import RouteHelpers from "../../../helpers/route-helpers";

import "../styles/style.css";

const Router = () => {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Route
        path='/'
        render={({match: {url}}) => (
          <>
            <PublicWrapper url={url}>
              {RouteHelpers.routeRenderer(routeConstants.publicRoutes, url)}
            </PublicWrapper>
            <Route
              path='/app'
              render={({match: {url}}) => (
                <>
                  <PrivateWrapper url={url}>
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
    </BrowserRouter>
  );
};

export default Router;
