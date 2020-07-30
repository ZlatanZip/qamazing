import React from "react";
import {withRouter} from "react-router-dom";

import LocalStorageHelper from "../../../helpers/local-storage-helper";
import RouteHelpers from "../.././../helpers/route-helpers";
import routeConstants from "../../../base/router/routes-constants";

import customDropdownConstants from "../constants/constants";

import "../styles/style.css";

const Dropdown = (props) => {
  const {show, name, email, dropDownToggle, history} = props;
  const dropDownClasses = show ? "dropdown open" : "dropdown";

  return (
    <div className={dropDownClasses}>
      <div className='dropdown_header'>
        <img
          className='dropdown_img'
          src={require("../../../common/assets/avatar.png")}
        />
        <h1>{name}</h1>
        <h4>{email}</h4>
      </div>
      <div className='dropdown_actions_wrapper'>
        {history.location.pathname ===
        routeConstants.privateRoutes.myProfile.fullPath ? (
          <li onClick={dropDownToggle}>
            <div
              onClick={() =>
                RouteHelpers.goToRoute(
                  routeConstants.privateRoutes.dashboard.fullPath
                )
              }
            >
              {customDropdownConstants.linkText.dashboardLink}
            </div>
          </li>
        ) : (
          <li onClick={dropDownToggle}>
            <div
              onClick={() =>
                RouteHelpers.goToRoute(
                  routeConstants.privateRoutes.myProfile.fullPath
                )
              }
            >
              {customDropdownConstants.linkText.profileLink}
            </div>
          </li>
        )}
        <li onClick={LocalStorageHelper.clearUserData}>
          <div
            onClick={() =>
              RouteHelpers.goToRoute(routeConstants.publicRoutes.login.fullPath)
            }
          >
            {customDropdownConstants.linkText.logoutLink}
          </div>
        </li>
      </div>
    </div>
  );
};

export default withRouter(Dropdown);
