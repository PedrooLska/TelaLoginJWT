import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";

export const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default routes;
