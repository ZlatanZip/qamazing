import React, {Component} from "react";
import {connect} from "react-redux";

import {Route, BrowserRouter} from "react-router-dom";

import PrivateWrapper from "../../wrapper-private/components/wrapper-private";
import PublicWrapper from "../../wrapper-public/components/wrapper-public";

import routeConstants from "../../../common/routes/routes";

import {getUsers, searchAndSortUsers} from "../../users/actions/user-actions";
import RouteHelpers from "../../../helpers/route-helpers";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";

class Router extends Component {
  render() {
    const {loader} = this.props;

    return (
      <BrowserRouter>
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
                      {RouteHelpers.routeRenderer(
                        routeConstants.privateRoutes,
                        url
                      )}
                    </PrivateWrapper>
                  </>
                )}
              />
            </>
          )}
        />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    loader: state.loader.loader,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
