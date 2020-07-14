import React, { Component } from "react";

import Table from "../../../shared_components/custom-table/custom-table";
import Logo from "../../../shared_components/logo/components/logo";

import { connect } from "react-redux";

import { getUsers, searchAndSortUsers } from "../../users/actions/user-actions";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";
import SideMenu from "../../../shared_components/side-menu/side-menu";
import CustomNav from "../../../shared_components/custom-nav/custom-nav";
import BackgroundOpacity from "../../../shared_components/background-opacity/background-opacity";
import CustomSearch from "../../../shared_components/custom-search/custom-search";

import Users from "../../users/components/users";
import Projects from "../../projects/components/projects";
import Resources from "../../resources/components/resources";

class Dashboard extends Component {
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

  componentToRenderHandler = () => {
    const path = this.props.location.pathname;
    switch (path) {
      case "/app/users":
        return <Users />;
      case "/app/projects":
        return <Projects />;
      case "/app/resources":
        return <Resources />;

      default:
        return <Users />;
    }
  };

  componentDidMount() {
    const { getUsers } = this.props;

    const component = this.componentToRenderHandler();
    this.setState((state) => {
      return {
        ...state,
        componentToRender: component,
      };
    });

    getUsers("helo");
  }

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

  render() {
    const { users, loader } = this.props;
    const { componentToRender } = this.state;
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

        <div className="dash_header">
          <h1 style={{ color: "white" }}>Users Screen</h1>{" "}
          <CustomSearch
            click={this.searchAndSortUserHandler}
            onChange={this.onChange}
          />
        </div>

        <div className="center">
          <div>{loader ? <Loader /> : componentToRender}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.users,
    loader: state.loader.loader,
  };
};

const mapDispatchToProps = {
  getUsers,
  searchAndSortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
