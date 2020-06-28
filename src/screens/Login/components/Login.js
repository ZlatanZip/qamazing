import React, { Component } from "react";

import CustomForm from "../../../shared_components/CustomForm/CustomForm";
import CustomInput from "../../../shared_components/CustomInput/CustomInput";

import "../styles/style.css";

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
    return (
      <div className="form_center">
        <CustomForm
          title="Login"
          handleSubmit={this.handleSubmit}
          buttonText="Login"
        >
          <CustomInput
            label="E-mail"
            placeholder="Enter your email"
            errorText="Please enter your email"
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            errorText="Please enter your password"
          />
        </CustomForm>
      </div>
    );
  }
}

export default Login;
