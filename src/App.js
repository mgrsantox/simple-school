import React, { Component } from "react";
import "./App.css";
import { DefaultContainer } from "./components/error/Default";
import { DashboardContainer } from "./components/dashboard/Dashboard";
import { LoginContainer } from "./components/auth/Login";
import { LunchContainer } from "./components/dashboard/Lunch";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CssBaseline from "@material-ui/core/CssBaseline";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <CssBaseline />
          <Switch>
            <PrivateRoute exact path="/" component={DashboardContainer} />
            <PrivateRoute path="/lunch" component={LunchContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="" component={DefaultContainer} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
