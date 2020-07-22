import React from "react";

const Testy = (props) => {
  console.log(props);
  return <div>{props.children}</div>;
};

export default Testy;
