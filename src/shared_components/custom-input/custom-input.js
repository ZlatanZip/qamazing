import React, {useReducer} from "react";

import "./style.css";

const CustomInput = (props) => {
  const {
    input,
    label,
    placeholder,
    errorText,
    id,
    type,
    max,
    min,
    meta,
  } = props;
  console.log(props);
  /*  const textChangeHandler = (text) => {
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
 */
  return (
    <div className='input_wrapper'>
      {label && <label className='input_field_label'>{label}</label>}
      <div>
        <input className='input_field' {...input} placeholder={placeholder} />
        {meta.touched && meta.error && (
          <small className='input_field_errorText'>{errorText}</small>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
