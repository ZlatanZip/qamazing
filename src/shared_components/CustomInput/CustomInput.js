import React from "react";

import "./style.css";

const CustomInput = (props) => {
  const { id, email, errorText, required, min, max } = props;

  const textChangeHandler = (text) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (required && text.trim().length === 0) {
      isValid = false;
    }
    if (email && !regex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (min != null && text.length < min) {
      isValid = false;
    }
    if (max != null && text.length > max) {
      isValid = false;
    }
  };

  const lostFocusHandler = () => {};

  return (
    <div className="input_wrapper">
      {props.label && (
        <label className="input_field_label">{props.label}</label>
      )}
      <input {...props} className="input_field" onChange={textChangeHandler} />
      <small className="input_field_errorText">{errorText}</small>
    </div>
  );
};

export default CustomInput;
