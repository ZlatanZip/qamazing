import React from "react";

import GlobalWrapper from "./app/global-wrapper/components/global-wrapper";

import "./App.css";

const App = (props) => {
  return <div className='App'>{props.children}</div>;
};

export default App;
