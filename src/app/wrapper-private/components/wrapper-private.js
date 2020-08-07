import React, { Component } from "react";
import { Route } from "react-router-dom";

import Loader from "../../../shared_components/loader/component/loader";
import SideMenu from "../../../shared_components/side-menu/components/side-menu";
import CustomNav from "../../../shared_components/custom-nav/custom-nav";
import BackgroundOpacity from "../../../shared_components/background-opacity/background-opacity";
import CustomDropDown from "../../../shared_components/custom-dropdown/components/custom-dropdown";

import LocalStorageHelper from "../../../helpers/local-storage-helper";
import RouteHelpers from "../../../helpers/route-helpers";

import routeConstants from "../../../base/router/routes-constants";

import "../styles/style.css";

const PrivateRoutes = (props) => {
  const { children } = props;
  const token = LocalStorageHelper.getAccessToken();
  return (
    <Route
      render={() => {
        if (token) {
          return children;
        } else {
          RouteHelpers.goToRoute(routeConstants.publicRoutes.login.fullPath);
        }
      }}
    />
  );
};

class WrapperPrivate extends Component {
  state = {
    sideMenuOpen: false,
    dropDownOpen: false,
  };

  closeMenuWhenNotUsedHandler = () => {
    if (!this.state.sideMenuOpen) this.setState({ sideMenuOpen: false });
  };

  closeDropDownWhenNotUsedHandler = () => {
    if (!this.state.dropDownOpen) this.setState({ dropDownOpen: false });
  };

  sideMenuToggleHandler = () => {
    this.forceUpdate();
    if (this.state.sideMenuOpen === true)
      setTimeout(this.closeMenuWhenNotUsedHandler, 3000);
    this.setState((state) => {
      return {
        sideMenuOpen: !state.sideMenuOpen,
      };
    });
  };

  dropDownToggleHandler = () => {
    setTimeout(this.closeDropDownWhenNotUsedHandler, 3000);
    this.setState((state) => {
      return {
        dropDownOpen: !state.dropDownOpen,
      };
    });
  };

  backgroundOpacityToggleHandler = () => {
    this.setState({ sideMenuOpen: false });
  };

  render() {
    const { children, loader } = this.props;
    const { sideMenuOpen, dropDownOpen } = this.state;

    let backgroundOpacity;
    if (sideMenuOpen) {
      backgroundOpacity = (
        <BackgroundOpacity click={this.backgroundOpacityToggleHandler} />
      );
    }

    return (
      <div className="wrapper_private wrapper_background">
        <CustomNav
          sideMenuToggle={this.sideMenuToggleHandler}
          dropDownToggle={this.dropDownToggleHandler}
        />
        <SideMenu
          show={sideMenuOpen}
          sideMenuToggle={this.sideMenuToggleHandler}
        />
        {backgroundOpacity}
        <CustomDropDown
          show={dropDownOpen}
          name="Zlatan Salihagic"
          email="zlatan.salihagic@mop.ba"
          dropDownToggle={this.dropDownToggleHandler}
        />
        <div className="wrapper_private_content">
          {children}
          {loader && <Loader text="users" />}
        </div>
      </div>
    );
  }
}

export default WrapperPrivate;
