import React, {Component} from "react";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";

import CustomButton from "../../../shared_components/custom-button/custom-button";
import CustomInput from "../../../shared_components/custom-input/custom-input";
import formConstants from "../constants/user-profile-constants";

import {getUserProfile} from "../actions/user-profile-actions";

import "../styles/style.css";

class UserProfile extends Component {
  componentDidMount() {
    const {getUserProfile} = this.props;
    console.log(this.props.userProfile);
    getUserProfile();
  }

  showDetails = (details) => {
    return Object.entries(details).map(([key, value]) => {
      return (
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            maxWidth: "400px",
            height: "24px",
            margin: "0 auto",
            padding: "0",
          }}
        >
          <h4 style={{margin: "3px"}}> {key + ":" + value}</h4>
        </div>
      );
    });
  };

  handleSubmit() {
    console.log("hello");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form_fields'>
        <h1 className='form_title'>{formConstants.formTitle}</h1>
        {this.props.userProfile && this.showDetails(this.props.userProfile)}
        <CustomButton
          buttonText={formConstants.buttonText.saveButton}
          buttonType='submit'
          // disabled={!valid}
        />
        <CustomButton
          buttonText={formConstants.buttonText.cancleButton}
          buttonType='submit'
          // disabled={!valid}
        />
      </form>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    loader: state.loader.loader,
    userProfile: state.userProfile.userProfileDetails,
  };
};

const mapDispatchToProps = {
  getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
