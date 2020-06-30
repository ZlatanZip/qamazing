import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
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
        <LoginForm />
      </div>
    );
  }
}
//test change
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
