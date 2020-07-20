import React, {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import App from "../../../App";
import PrivateWrapper from "../../wrapper-private/components/wrapper-private";
import PublicWrapper from "../../wrapper-public/components/wrapper-public";
import routeConstants from "../../../common/routes/routes";

import {getUsers, searchAndSortUsers} from "../../users/actions/user-actions";

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
    this.setState({sideMenuOpen: false});
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
    const {searchAndSortUsers} = this.props;
    searchAndSortUsers(this.state.userSortData);
    console.log(this.state.userSortData);
  };

  render() {
    const {loader} = this.props;
    // const { url } = this.props.match;
    console.log(this.props);

    const privateComponents = routeConstants.privateRoutes.map((route, key) => {
      return (
        <Route
          exact
          {...route}
          path={route.path}
          component={route.component}
          key={key}
        />
      );
    });

    const publicComponents = routeConstants.publicRoutes.map((route, key) => {
      return (
        <Route
          exact
          {...route}
          path={route.path}
          component={route.component}
          key={key}
        />
      );
    });

    return (
      <Router>
        <Route exact path='/'>
          <PublicWrapper>
            <Switch>{publicComponents}</Switch>
          </PublicWrapper>
        </Route>
        <Route path='/app'>
          <PrivateWrapper>
            <Switch>{privateComponents}</Switch>{" "}
          </PrivateWrapper>
        </Route>
      </Router>
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
