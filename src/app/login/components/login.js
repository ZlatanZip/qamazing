import React, {Component} from "react";
import {connect} from "react-redux";

import LoginForm from "./login-form";
import "../styles/style.css";

import {login} from "../actions/login-action";
import GoogleLogin from "react-google-login";

class Login extends Component {
  handleSubmit = (values) => {
    login(values);
  };

  render() {
    const {data, logins} = this.props;

    return (
      <div className='form_center'>
        <LoginForm onSubmit={this.handleSubmit}>
          <GoogleLogin googleRespose={this.googleResponse} />
        </LoginForm>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    data: state.auth.authField,
    logins: state.login.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
