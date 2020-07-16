import React from "react";
import "../style/style.css";

const Loader = (props) => {
  const { text } = props;
  return (
    <div className="loader">
      <h1 className="loader_title">MOP</h1>
      <h2 className="loader_text">{text}</h2>
    </div>
  );
};

export default Loader;
