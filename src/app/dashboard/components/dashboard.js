import React from "react";

import RouteHelpers from "../../../helpers/route-helpers";
import routeConstants from "../../../base/router/routes-constants";

import "../styles/style.css";

const Dashboard = () => {
  return (
    <div className='dashboard_wrapper'>
      <h1>Dashboard</h1>
      <div className='dashboard_icons_wrapper'>
        <div
          className='dashboard_icons'
          onClick={() =>
            RouteHelpers.goToRoute(routeConstants.privateRoutes.users.fullPath)
          }
        >
          <h1>Moppies</h1>
        </div>
      </div>
      <div className='dashboard_icons_wrapper'>
        <div
          className='dashboard_icons'
          onClick={() =>
            RouteHelpers.goToRoute(
              routeConstants.privateRoutes.projects.fullPath
            )
          }
        >
          <h1>Projects</h1>
        </div>
        <div
          className='dashboard_icons'
          onClick={() =>
            RouteHelpers.goToRoute(
              routeConstants.privateRoutes.resources.fullPath
            )
          }
        >
          <h1>Resources</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
