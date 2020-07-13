import React, { Component } from "react";

import Table from "../../../shared_components/CustomTable/CustomTable";
import Logo from "../../../shared_components/Logo/components/Logo";

import { connect } from "react-redux";

import { getUsers } from "../../Users/actions/userActions";

import "../styles/style.css";

import Loader from "../../../shared_components/Loader/component/Loader";
import SideMenu from "../../../shared_components/SideMenu/SideMenu";
import CustomNav from "../../../shared_components/CustomNav/CustomNav";
import BackgroundOpacity from "../../../shared_components/BackgroundOpacity/BackgroundOpacity";
import CustomSearch from "../../../shared_components/customSearch/CustomSearch";

class Dashboard extends Component {
  state = {
    sideMenuOpen: false,
    userSortData: {
      sortByColoumn: "",
      sortDirection: "asc",
      lastSeen: Number,
      searchText: "",
    },
    componentToRender: <Table />,
  };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers("helo");
    console.log("dashboard");
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

  searchAndSortUserHandler = () => {
    console.log(this.state.userSortData.searchText);
  };

  render() {
    const { users, loader } = this.props;
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
          <div>{loader ? <Loader /> : <Table users={users} />}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.users,
    loader: state.loader.loader,
    // userProfile: state.userProfile.userInfo,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
