import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./common/routes/routes";

//import "./App.scss";

import GlobalWrapper from "./app/global-wrapper/components/global-wrapper";

const App = (props) => {
  const routeComponents = routes.publicRoutes.map(
    ({ path, component }, key) => {
      return <Route exact path={path} component={component} key={key} />;
    }
  );

  return (
    <Router>
      <div className="App">
        <Route path="/" component={GlobalWrapper}>
          {routeComponents}
        </Route>
      </div>
    </Router>
  );
};

export default App;
