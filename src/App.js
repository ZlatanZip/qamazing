import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import "./App.scss";
import Landing from "./screens/Landing/components/Landing";
import Register from "./screens/Register/components/Register";
import Login from "./screens/Login/components/Login";
/*import Header from "./components/Header";
import Home from "./containers/Home";
import MyQuestions from "./containers/MyQuestions";
import Footer from "./components/Footer";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import QuestionDetails from "./containers/QuestionDetails"; */

//import setAuthorizationHeader from "./helpers/setAuthorizationheader";

const App = (props) => {
  /*  const userData = localStorage.getItem("userData");
  let parsedData;
  if (userData) {
    parsedData = JSON.parse(userData);
    setAuthorizationHeader("Bearer " + parsedData.token);
  } */

  return (
    <Router>
      <Switch>
        <div className="App">
          {/*   <Header role={parsedData && parsedData.role} /> */}
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          {/*  <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/projects/create_project' exact component={CreateProject} />
          <Route path='/login' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/login' exact component={Login} /> */}
          {/* <Route
            path='/questions/:id'
            render={(props) => (
              <QuestionDetails
                {...props}
                userId={parsedData && parsedData.userId}
              />
            )}
          /> */}
          {/*  <Route
            path='/my_questions'
            render={(props) => (
              <MyQuestions
                {...props}
                userId={parsedData && parsedData.userId}
              />
            )}
          />
          <Route
            token={parsedData && parsedData.token}
            path='/login'
            component={Login}
          />
          <Route
            token={parsedData && parsedData.token}
            path='/register'
            component={Register}
          />
          <Route path='/profile' component={Profile} />
          <Footer /> */}
        </div>
      </Switch>
    </Router>
  );
};

export default App;
