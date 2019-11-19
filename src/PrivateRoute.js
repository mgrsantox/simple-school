import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalDb from "./api/LocalStorage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      LocalDb.getSessions() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
export default PrivateRoute;
