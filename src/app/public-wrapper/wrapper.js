import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Wrapper = () => {
  let { path, url } = useRouteMatch();
  console.log(path + " " + url);
  return (
    <div>
      <h2>Admins</h2>
      <ul>
        <li>
          <Link to={`${url}/users`}>Users</Link>
        </li>
        <li>
          <Link to={`${url}/projects`}>Projects</Link>
        </li>
        <li>
          <Link to={`${url}/resources`}>Resources</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${url}/users`} component={<h1>users</h1>} />
        <Route path={`${url}/projects`} component={<h1>projects</h1>} />
        <Route path={`${url}/resources`} component={<h1>resources</h1>} />
      </Switch>
    </div>
  );
};

export default Wrapper;
