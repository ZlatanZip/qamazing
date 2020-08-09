import React from "react";
import SelectList from "react-widgets/lib/SelectList";

import "react-widgets/dist/css/react-widgets.css";

import "./style.css";

const CustomSelect = (props) => {
  console.log(props);

  const {
    input,
    label,
    placeholder,
    type,
    data,
    meta: {touched, error},
  } = props;

  return (

    <div className='select_field_wrapper'>
      {label && <label className='select_field_label'>{label}</label>}
      <div>
        <SelectList
          {...input}
          style={{backgroundColor: "white"}}
          type={type}
          placeholder={placeholder}
          data={data}
        />
        {touched && error && (
          <small className='select_field_errorText'>{error}</small>

        )}
      </div>{" "}
    </div>
  );
};


export default CustomSelect;

