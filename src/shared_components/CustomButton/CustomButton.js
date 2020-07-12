import React from "react";

import "./style.css";

const CustomButton = (props) => {
  const { buttonText, buttonType, disabled } = props;
  return (
    <button className="custom_button" type={buttonType} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
