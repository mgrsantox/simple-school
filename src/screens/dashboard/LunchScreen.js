import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";

import Snackbar from "@material-ui/core/Snackbar";
import MySnackbarContentWrapper from "./snakbarMessage";

let today = new Date(),
  date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const initialState = {
  count: "",
  countError: null,
  date: date,
  open: false
};

export class LunchScreen extends Component {
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

  logouthandle = e => {
    this.props.logout(this.props);
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      open: false
    });
  };

  validate = () => {
    let countError = null;
    if (!this.state.count) {
      countError = true;
    }
    if (countError) {
      this.setState({ countError });
      return false;
    }
    this.handleClick();
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(initialState);
    this.validate();
    this.props.updateLunchCount(
      this.props.location.pathname.slice(7),
      this.props.state.auth.user.employeeId,
      this.state.count,
      this.props
    );
    //validate null  pardaina

    // this.props.group(this.props.state.auth.user.employeeId, this.props)
    // if (isValid) {
    //   console.log(this.state);
    //   this.setState(initialState);
    // }
  };

  render() {
    const { classes } = this.props;
    const isError = this.props.state.lunch.error.length;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={6} className={classes.userInfo}>
                <p>Lunch</p>
              </Grid>
              <Grid item xs={6} className={classes.date}>
                <p>{this.state.date}</p>
              </Grid>
              <Grid item xs={12}>
                <form
                  onSubmit={this.handleSubmit}
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    error={this.state.countError}
                    id="outlined-basic"
                    onChange={this.handleChange}
                    value={this.state.count}
                    className={classes.textField}
                    label="Enter Count"
                    margin="normal"
                    variant="outlined"
                    name="count"
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
                  {/*  <Checkbox
                  //   onChange={handleChange("checkedB")}
                  value="checkedB"
                  style={{
                    color: "#42a5f5"
                  }}
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
                <span>Count as Sub</span> */}
                  <Button
                    style={{
                      marginTop: "20px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      background: "#42a5f5",
                      textDecoration: "none"
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Submit Count
                  </Button>
                </form>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  style={{
                    color: "#42a5f5",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}
                  onClick={this.logouthandle}
                  className={classes.button}
                >
                  Lock
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Link className={classes.link} to="/">
                  <Button
                    variant="outlined"
                    style={{
                      color: "#42a5f5",
                      // background: "#ffbd03",
                      fontWeight: "bold",
                      fontSize: "16px",
                      "&:hover": {
                        background: "green"
                      }
                    }}
                    className={clsx(classes.button, classes.cancelButton)}
                  >
                    Cancel
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          {isError > 0 ? (
            <MySnackbarContentWrapper
              onClose={this.handleClose}
              variant="error"
              message={this.props.state.lunch.error}
            />
          ) : (
            <MySnackbarContentWrapper
              onClose={this.handleClose}
              variant="success"
              message="Updated Successfully"
            />
          )}
        </Snackbar>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  cancelButton: {
    "&:hover": {
      background: "#fce4ec !important"
    }
  },
  card: {
    padding: 20,
    display: "flex",
    width: "70%",
    margin: "auto",
    marginTop: "10%",
    height: "auto",
    maxWidth: 500,
    minWidth: 400,
    textAlign: "center"
  },
  textField: {
    width: "100%"
  },
  title: {
    fontSize: 14
  },
  link: {
    textDecoration: "none"
  },
  pos: {
    marginBottom: 12
  },
  userInfo: {
    textAlign: "left"
  },
  date: {
    textAlign: "right"
  },
  button: {
    width: "100%",
    height: "60px",
    border: "1px solid #42a5f5",
    "&:hover": {
      background: "#e3f2fd"
    }
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
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
  notchedOutline: {},
  toaster: {
    background: "red"
  }
});

export default withStyles(styles)(LunchScreen);
