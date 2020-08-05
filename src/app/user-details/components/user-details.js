import React, {Component} from "react";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";

import CustomButton from "../../../shared_components/custom-button/custom-button";
import CustomInput from "../../../shared_components/custom-input/custom-input";
import formConstants from "../constants/form-constants";

import {getUserDetails} from "../actions/user-details-actions";

import "../styles/style.css";

class UserDetails extends Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    const {getUserDetails} = this.props;

    getUserDetails(userId);
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
        {this.props.userDetails && this.showDetails(this.props.userDetails)}
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
    userDetails: state.userDetails.userDetails,
  };
};

const mapDispatchToProps = {
  getUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
