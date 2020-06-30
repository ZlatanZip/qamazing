import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import "./App.scss";
import Landing from "./screens/Landing/components/Landing";
import Register from "./screens/Register/components/Register";
import Login from "./screens/Login/components/Login";
import Dashboard from "./screens/Dashboard/components/Dashboard";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
