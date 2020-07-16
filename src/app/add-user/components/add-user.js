import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "../../../common/routnig/private-routes";
import privateRouteConstants from "../../../common/routnig/private-routes-constants";

import { getUsers, searchAndSortUsers } from "../../users/actions/user-actions";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";
import SideMenu from "../../../shared_components/side-menu/side-menu";
import CustomNav from "../../../shared_components/custom-nav/custom-nav";
import BackgroundOpacity from "../../../shared_components/background-opacity/background-opacity";

import Dashboard from "../../dashboard/components/dashboard";
import Users from "../../users/components/users";
//import AddUser from "../../add-user/components/add-user";
import UserDetails from "../../user-details/components/user-details";
import MyProfile from "../../my-profile/components/my-profile";
import Projects from "../../projects/components/projects";
import Resources from "../../resources/components/resources";

class Main extends Component {
  state = {
    sideMenuOpen: false,
    userSortData: {
      sortByColoumn: "",
      sortDirection: "asc",
      lastSeen: Number,
      searchText: "",
    },
    componentToRender: null,
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

  renderRoutes = () => {
    privateRouteConstants.map((route) => {
      return <Route path={route.path} component={route.component} />;
    });
  };

  render() {
    const { loader } = this.props;
    const { url, path } = this.props.match;
    const { componentToRender } = this.state;

    let backgroundOpacity;
    if (this.state.sideMenuOpen) {
      backgroundOpacity = (
        <BackgroundOpacity click={this.backgroundOpacityToggleHandler} />
      );
    }
    return (
      <PrivateRoutes className="dash_container">
        <CustomNav toggleHandler={this.sideMenuToggleHandler} url={url} />
        <SideMenu show={this.state.sideMenuOpen} url={url} />
        {backgroundOpacity}
        <div className="center">
          <Switch>
            <Route exact path={path} component={Dashboard} />
            <Route exact path={`${url}/users`} component={Users} />
            {/* <Route path={`${url}/add_user`} component={AddUser} /> */}
            <Route path={`${url}/users/:id`} component={UserDetails} />
            <Route path={`${url}/my_profile`} component={MyProfile} />
            <Route path={`${url}/projects`} component={Projects} />
            <Route path={`${url}/resources`} component={Resources} />
          </Switch>

          {loader ? <Loader text="users" /> : componentToRender}
        </div>
      </PrivateRoutes>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
