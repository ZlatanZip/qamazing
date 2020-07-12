import React, { Component } from "react";

import Table from "../../../shared_components/CustomTable/CustomTable";
import Logo from "../../../shared_components/Logo/components/Logo";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { getUsers } from "../../Users/actions/userActions";

import "../styles/style.css";

import Loader from "../../../shared_components/Loader/component/Loader";
import SideMenu from "../../../shared_components/SideMenu/SideMenu";
import CustomNav from "../../../shared_components/CustomNav/CustomNav";

class Dashboard extends Component {
  state = {
    sideMenuOpen: false,
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

  render() {
    const { users, loader } = this.props;
    console.log(loader);
    return (
      <div>
        <CustomNav />
        <SideMenu show={this.state.sideMenuOpen} />
        <div className="grid-container">
          <div className="item1"></div>
          <div className="item2"></div>

          <div className="item4">
            {loader ? (
              <div className="center">
                <Loader />
              </div>
            ) : (
              <Table users={users} />
            )}
          </div>
          <div className="item5">Footer</div>
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
