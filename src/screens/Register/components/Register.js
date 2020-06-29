import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/style.css";
import RegisterForm from "./RegisterForm";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      registrationRrrors: "",
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
        <RegisterForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
