import React from "react";

import "./style.css";

<<<<<<< HEAD
const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
  }
};

const CustomInput = (props) => {
  const { id, onInputChange, email, errorText, required, min, max } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    touched: false,
  });
=======
const CustomInput = (props) => {
  const { id, email, errorText, required, min, max } = props;
>>>>>>> b3066bc07831e93a8456b9568d81012bde596491

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
