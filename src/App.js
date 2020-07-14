import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoutes from "./common/routnig/pirvate-routes";

//import "./App.scss";
import Register from "./app/register/components/register";
import Login from "./app/login/components/login";
import Main from "./app/dashboard/components/dashboard";
import UserDetails from "./app/user-details/components/user-details";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          <PrivateRoutes>
            <Route path="/app" component={Main} />
          </PrivateRoutes>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
