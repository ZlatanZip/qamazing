import React, { Component } from "react";
import { connect } from "react-redux";

import CustomSearch from "../../../shared_components/custom-search/custom-search";
import Table from "../../../shared_components/custom-table/custom-table";

import { getUsers, searchAndSortUsers } from "../../users/actions/user-actions";

class Projects extends Component {
  componentDidMount() {
    const { getUsers } = this.props;

    /*     const component = this.componentToRenderHandler();
    this.setState((state) => {
      return {
        ...state,
        componentToRender: component,
      };
    }); */

    getUsers("helo");
  }
  render() {
    const { users, loader } = this.props;
    return (
      <div>
        <div className="dash_header">
          <h1 style={{ color: "white" }}>Projects</h1>{" "}
          <CustomSearch
            placeholder=" Search a project"
            click={this.searchAndSortUserHandler}
            onChange={this.onChange}
          />
        </div>
        <Table users={users} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
