import React from "react";

import "./style.css";

const CustomButton = (props) => {
  const {buttonText, buttonType, disabled, click, children, reset} = props;
  const customButtonClasses = disabled
    ? "custom_button_disabled"
    : "custom_button";
  return (
    <button
      onClick={reset}
      className={customButtonClasses}
      disabled={disabled}
      type={buttonType}
    >
      {buttonText || children}
    </button>
  );
};

export default CustomButton;
