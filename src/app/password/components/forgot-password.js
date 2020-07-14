import React, { Component } from "react";

import "../styles/style.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleForgotPassword = async (e) => {
    e.preventDefault();
    const { email } = this.state;
  };

  render() {
    return (
      <div>
        <form className="form_fields" onSubmit={this.handleSubmit}>
          <div className="form_field">
            <label className="form_field_label">E-mail A</label>
            <input
              className="form_field_input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form_field">
            <label className="form_field_label">Password</label>
            <input
              className="form_field_input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button className="form_field_button" type="submit">
            Request
          </button>
        </form>
        <img />
      </div>
    );
  }
}

export default ForgotPassword;
