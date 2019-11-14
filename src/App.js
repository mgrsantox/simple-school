import React, { Component } from "react";
import "./App.css";
import Default from "./screens/error/Default";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/auth/Login";
import Lunch from "./screens/dashboard/Lunch";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/lunch" component={Lunch} />
          <Route path="" component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
