import React, { Component } from "react";

import Table from "../../../shared_components/CustomTable/CustomTable";
import Logo from "../../../shared_components/Logo/components/Logo";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { getUsers } from "../../Users/actions/userActions";

import "../styles/style.css";

import Loader from "../../../shared_components/Loader/component/Loader";
import SideMenu from "../../../shared_components/SideMenu/components/SideMenu";
import Toolbar from "../../../shared_components/Toolbar/Toolbar";

class Dashboard extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers("helo");
    console.log("dashboard");
  }

  render() {
    const { users, loader } = this.props;
    console.log(loader);
    return (
      <div className="grid-container">
        <Toolbar />
        <div className="item1">
          <Logo />
        </div>
        <div className="item2">
          <SideMenu />
        </div>

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
