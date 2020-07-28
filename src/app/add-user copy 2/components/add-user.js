import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const AddUser = () => {
  return (
    <BrowserRouter>
      <PublicWrapper url={url}>
        <Switch>
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />

          <Route path component />
        </Switch>
      </PublicWrapper>
      <PrivateWrapper url={url}>
        <Switth>
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />

          <Route path component />
          <Route path component />
          <Route path component />

          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
          <Route path component />
        </Switth>
      </PrivateWrapper>
    </BrowserRouter>
  );
};

export default AddUser;
