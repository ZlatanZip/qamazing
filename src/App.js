import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import "./App.scss";
import Register from "./app/register/components/register";
import Login from "./app/login/components/login";
import Main from "./app/dashboard/components/dashboard";
import UserDetails from "./app/user-details/components/user-details";
import Wrapper from "./app/Wrapper/wrapper";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/app" component={Main} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
