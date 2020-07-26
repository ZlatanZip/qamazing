import React, {Component} from "react";
import {connect} from "react-redux";
import {RiUserAddLine} from "react-icons/ri";

import CustomSearch from "../../../shared_components/custom-search/custom-search";
import Table from "../../../shared_components/custom-table/components/custom-table";
import CustomButton from "../../../shared_components/custom-button/custom-button";
import CustomLogoButton from "../../../shared_components/custom-logo-button/components/custom-logo-button";

import UserConstants from "../constants/user-constants";
import RouteHelpers from "../../../helpers/route-helpers";
import {getUsers, searchAndSortUsers} from "../../users/actions/user-actions";

import "../styles/style.css";

class Users extends Component {
  componentDidMount() {
    const {getUsers} = this.props;
    getUsers();
  }
  render() {
    const {users, loader} = this.props;
    return (
      <div className='users_screen '>
        <div className='user_screen_header'>
          <div>
            <h1 className='user_screen_title'>{UserConstants.userPageTitle}</h1>
            <div>
              <RiUserAddLine
                size={36}
                color='white'
                onClick={() => RouteHelpers.goToRoute("/app/add_user")}
              />
            </div>
          </div>

          <CustomSearch
            buttonText={UserConstants.customSearch.buttonText}
            placeholder={UserConstants.customSearch.placeholder}
            click={this.searchAndSortUserHandler}
            onChange={this.onChange}
          />
        </div>

        <Table tableData={users} />
        <div>
          <CustomButton buttonText={UserConstants.loadUsersButtonText} />
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
