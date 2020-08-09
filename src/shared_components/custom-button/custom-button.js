import React from "react";

import "./style.css";

const CustomButton = (props) => {
  const {buttonText, buttonType, disabled, click, children, reset} = props;
  const customButtonClasses = disabled
    ? "custom_button_disabled"
    : "custom_button";
  return (
    <button onClick={click} className={customButtonClasses} type={buttonType}>
      {buttonText || children}
    </button>
  );
};

export default CustomButton;
