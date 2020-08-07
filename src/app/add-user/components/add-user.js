import React, {Component} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

import AddUserForm from "./add-user-form";
import CustomInput from "../../../shared_components/custom-input/custom-input";
import CustomButton from "../../../shared_components/custom-button/custom-button";

import addUserConstants from "../constants/add-user-constants";
import RouteHelpers from "../../../helpers/route-helpers";

import {inviteUsers} from "../actions/add-user-action";

import "../styles/style.css";

const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

class AddUser extends Component {
  inviteUser = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div className='add_user_screen '>
        <div className='add_user_header'>
          <div>
            <h1 className='add_user_title'>
              {addUserConstants.addUserPageTitle}
            </h1>
          </div>
        </div>
        <AddUserForm handleSubmit={this.inviteUser}>
          <CustomButton
            buttonText={addUserConstants.buttonText.inviteButtonText}
          />
          <CustomButton
            buttonText={addUserConstants.buttonText.backToUsersButtonText}
            click={() => {
              RouteHelpers.goToRoute("back");
            }}
          />
        </AddUserForm>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {};
};

const mapDispatchToProps = {
  inviteUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
