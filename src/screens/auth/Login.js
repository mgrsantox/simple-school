import React, { Component } from "react";
import LoginCard from "../../components/auth/Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export class Login extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <LoginCard />
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

export default Login;
