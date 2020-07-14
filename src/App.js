import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import "./App.scss";
import Register from "./app/register/components/register";
import Login from "./app/login/components/login";
import Dashboard from "./app/dashboard/components/dashboard";
import UserDetails from "./app/user-details/components/user-details";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/users/:id" component={UserDetails} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
