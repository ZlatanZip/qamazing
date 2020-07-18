import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "../../../common/routes/private-routes";
import routeConstants from "../../../common/routes/routes";

import { getUsers, searchAndSortUsers } from "../../users/actions/user-actions";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";
import SideMenu from "../../../shared_components/side-menu/side-menu";
import CustomNav from "../../../shared_components/custom-nav/custom-nav";
import BackgroundOpacity from "../../../shared_components/background-opacity/background-opacity";

class GlobalWrapper extends Component {
  state = {
    sideMenuOpen: false,
    userSortData: {
      sortByColoumn: "",
      sortDirection: "asc",
      lastSeen: Number,
      searchText: "",
    },
  };

  sideMenuToggleHandler = () => {
    this.setState((state) => {
      return {
        sideMenuOpen: !state.sideMenuOpen,
      };
    });
  };

  backgroundOpacityToggleHandler = () => {
    this.setState({ sideMenuOpen: false });
  };

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((state) => ({
      ...state,
      userSortData: {
        ...state.userSortData,
        [name]: value,
      },
    }));
  };

  searchAndSortUserHandler = (e) => {
    e.preventDefault();
    const { searchAndSortUsers } = this.props;
    searchAndSortUsers(this.state.userSortData);
    console.log(this.state.userSortData);
  };

  static routeRednerer = (url) => {
    return routeConstants.privateRoutes.map(({ path, component }) => {
      return <Route exact path={`${url}${path}`} component={component} />;
    });
  };

  render() {
    const { loader } = this.props;
    // const { url } = this.props.match;
    console.log(this.props);
    let backgroundOpacity;
    if (this.state.sideMenuOpen) {
      backgroundOpacity = (
        <BackgroundOpacity click={this.backgroundOpacityToggleHandler} />
      );
    }
    return (
      <div className="dash_container">
        <CustomNav toggleHandler={this.sideMenuToggleHandler} />
        <SideMenu show={this.state.sideMenuOpen} />
        {backgroundOpacity}

        <div className="center">{loader && <Loader text="users" />}</div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    loader: state.loader.loader,
  };
};

const mapDispatchToProps = {
  getUsers,
  searchAndSortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalWrapper);
