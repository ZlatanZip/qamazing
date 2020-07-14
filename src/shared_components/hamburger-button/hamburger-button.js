import React from "react";
import "./style.css";

const HamburgerButton = (props) => {
  return (
    <button className="hamburger_button" onClick={props.click}>
      <div className="hamburger_button_lines" />
      <div className="hamburger_button_lines" />
      <div className="hamburger_button_lines" />
    </button>
  );
};

export default HamburgerButton;
