import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import logo from "../../images/logo.png";
import { withStyles } from "@material-ui/styles";

const initialState = {
  userName: "test4@gmail.com",
  password: "",
  passwordError: null
};

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  validate = () => {
    let passwordError = "";
    if (!this.state.password) {
      passwordError = true;
    }
    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(initialState);
    this.validate();
    this.props.onLogin(this.state.userName, this.state.password, this.props);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Grid container justify="center" alignItems="center">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Grid>
            <form
              onSubmit={this.handleSubmit}
              className={classes.container}
              noValidate
              autoComplete="off"
            >
              <div>
                <span className="error-message">
                  {this.props.state.auth.localError}
                </span>
                <TextField
                  error={this.state.passwordError}
                  id="outlined-basic"
                  className={classes.textField}
                  label="Enter PIN"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.outlinedInput,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Enter
              </Button>
            </form>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

LoginScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  errorMessage: {
    color: "red"
  },

  card: {
    minWidth: 275,
    marginTop: "5%",
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
    paddingTop: "20px",
    boxShadow: "10px 10px 20px -15px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: "90%",
    marginBottom: 30
  },
  button: {
    // margin: theme.spacing(1),
    width: "90%",
    background: "#42a5f5",
    color: "white",
    fontWeight: "bold",
    height: 50,
    "&:hover": {
      background: "#5677fc"
    }
  },
  logo: {
    width: "130px",
    marginBottom: "20px",
    boxShadow: "0px 8px 15px -4px",
    borderRadius: "50%"
  },
  label: {
    "&$focused": {
      color: "#42a5f5"
    }
  },
  focused: {},
  outlinedInput: {
    "&$focused $notchedOutline": {
      border: "2px solid #42a5f5"
    }
  },
  notchedOutline: {}
});

export default withStyles(styles)(LoginScreen);
