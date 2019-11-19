import React, { Component } from "react";
import "./App.css";
import Default from "./screens/error/Default";
import Dashboard from "./screens/dashboard/Dashboard";
// import LoginScreen from "./screens/auth/LoginScreen";
import { LoginContainer } from "./components/auth/Login";
import Lunch from "./screens/dashboard/Lunch";
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
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={LoginContainer} />
            <PrivateRoute path="/lunch" component={Lunch} />
            <Route path="" component={Default} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
