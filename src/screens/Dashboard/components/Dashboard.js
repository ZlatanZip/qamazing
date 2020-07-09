import React, { Component } from "react";

import Table from "../../../shared_components/CustomTable/CustomTable";
import Logo from "../../../shared_components/Logo/components/Logo";

import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { getUsers } from "../../Users/actions/userActions";

import "../styles/style.css";
import SideMenu from "../../../shared_components/SideMenu/components/SideMenu";
import Toolbar from "../../../shared_components/Toolbar/Toolbar";

class Dashboard extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers("helo");
    console.log("dashboard");
  }

  render() {
    const { users } = this.props;
    console.log(users);
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
          <Table users={users} />
        </div>
        <div className="item5">Footer</div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.users,
    // userProfile: state.userProfile.userInfo,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
