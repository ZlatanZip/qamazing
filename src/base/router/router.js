import React from "react";

import {Route, Router, Switch} from "react-router-dom";
import myHistory from "./history";

import PrivateWrapper from "../../app/wrapper-private/components/wrapper-private";
import PublicWrapper from "../../app/wrapper-public/components/wrapper-public";

import routeConstants from "./routes-constants";
import RouteHelpers from "../../helpers/route-helpers";

const Routes = () => {
  return (
    <Router history={myHistory}>
      <Route
        path='/'
        render={({match: {url}}) => (
          <>
            <PublicWrapper>
              <Switch>
                {RouteHelpers.routeRenderer(routeConstants.publicRoutes, url)}
              </Switch>
            </PublicWrapper>
            <Route
              path='/app'
              render={({match: {url}}) => (
                <>
                  <PrivateWrapper>
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

export default Routes;
