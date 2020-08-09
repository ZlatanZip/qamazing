import React from "react";
import SelectList from "react-widgets/lib/SelectList";

import "./style.css";

const CustomInput = (props) => {
  const {
    input,
    label,
    placeholder,
    type,
    meta: {touched, error},
  } = props;

  return (
    <div className='input_wrapper'>
      {label && <label className='input_field_label'>{label}</label>}
      <div>
        <SelectList
          {...input}
          className='input_field'
          type={type}
          placeholder={placeholder}
        />
        {touched && error && (
          <small className='input_field_errorText'>{error}</small>
        )}
      </div>{" "}
    </div>
  );
};

export default CustomInput;
