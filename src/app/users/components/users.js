import React, { Component } from "react";
import { connect } from "react-redux";
import { RiUserAddLine } from "react-icons/ri";

import CustomSearch from "../../../shared_components/custom-search/custom-search";
import Table from "../../../shared_components/custom-table/custom-table";

import { getUsers, searchAndSortUsers } from "../../users/actions/user-actions";
import CustomButton from "../../../shared_components/custom-button/custom-button";

import "../styles/style.css";

class Users extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers("helo");
  }
  render() {
    const { users, loader } = this.props;
    return (
      <div className="users_screen">
        <div className="user_screen_header">
          <div>
            <h1 className="user_screen_title">Moppies</h1>
            <div>
              <RiUserAddLine size={36} color="white" />
            </div>
          </div>
          <CustomSearch
            placeholder=" Search a moppie"
            click={this.searchAndSortUserHandler}
            onChange={this.onChange}
          />
        </div>

        <Table users={users} />
        <div>
          <CustomButton buttonText="Load More" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
