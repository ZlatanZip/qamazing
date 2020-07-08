import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
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
    //this.googleResponse = this.googleResponse.bind(this);
  }
  /*   googleResponse(res) {
    const googleResponseData = {
      name: res.profileObj.name,
      email: res.profileObj.email,
    };
    const user = res.profileObj;
     loginHandler(user);
    // console.log(res);
    console.log(res.profileObj);
    // history.push("/dashboard");
  }

   const loginHandler = async (data) => {
    await dispatch(login(data));
  }; */

  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = async (e) => {
    e.preventDefault();
  };

  handleSubmit = () => {
    const { email, password } = this.state;
  };

  render() {
    const { data, logins } = this.props;
    console.log(data);
    return (
      <div className="form_center">
        {data}
        <LoginForm>
          <GoogleLogin googleRespose={this.googleResponse} />
        </LoginForm>
        {/*   <h1>{logins && logins.map((moppie) => <h4>{moppie.name}</h4>)}</h1> */}
      </div>
    );
  }
}
//test change
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
