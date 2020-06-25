import React, { Component } from "react";


iport "../styles/style.css";
import CustomInput from "../../../shared_components/CustomInput/CustomInput";
import CustomForm from "../../../shared_components/CustomForm/CustomForm";


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registration_errors: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { email, password, password_confirmation } = this.state;
  };

  render() {
    return (

      <div className="form_center">
        <CustomForm
          title="Register"
          handleSubmit={this.handleSubmit}
          buttonText="Register"
          buttonType="submit"
        >
          <CustomInput
            id="name"
            label="Full Name"
            placeholder="Enter your full name"
            errorText="Please enter your full name"
          />
          <CustomInput
            id="email"
            label="E-mail"
            placeholder="Enter your email"
            errorText="Please enter your email"
          />
          <CustomInput
            id="password"
            label="Password"
            placeholder="Enter your new password"
            errorText="Please enter your new password"
          />
          <CustomInput
            id="cofirmationPassword"
            label="Confirm Password"
            placeholder="Repeat your new password"
            errorText="Please repeat your password "
          />
        </CustomForm>   
      </div>
    );
  }
}

export default Register;
