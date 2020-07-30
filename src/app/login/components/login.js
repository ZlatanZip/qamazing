import React, {Component} from "react";
import {connect} from "react-redux";

import LoginForm from "./login-form";
import "../styles/style.css";
import GoogleLogin from "react-google-login";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = async (e) => {
    e.preventDefault();
  };

  handleSubmit = () => {
    const {email, password} = this.state;
  };

  render() {
    const {data, logins} = this.props;

    return (
      <div className='form_center'>
        {/*  {data} */}
        <LoginForm>
          <GoogleLogin googleRespose={this.googleResponse} />
        </LoginForm>
        {/*   <h1>{logins && logins.map((moppie) => <h4>{moppie.name}</h4>)}</h1> */}
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
