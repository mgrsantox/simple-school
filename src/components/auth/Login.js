import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import logo from "../../images/logo.png";
import { withStyles } from "@material-ui/styles";

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Grid container justify="center" alignItems="center">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Grid>
            <form className={classes.container} Validate autoComplete="off">
              <div>
                <TextField
                  required
                  id="outlined-basic"
                  className={classes.textField}
                  label="Enter PIN"
                  margin="normal"
                  variant="outlined"
                  type="password"
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

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  card: {
    minWidth: 275,
    marginTop: "25%",
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
    width: "90%"
  },
  button: {
    // margin: theme.spacing(1),
    width: "90%",
    background: "#5677fc",
    color: "white",
    fontWeight: "bold"
  },
  logo: {
    width: "130px",
    marginBottom: "20px",
    boxShadow: "0px 8px 15px -4px",
    borderRadius: "50%"
  },
  label: {
    "&$focused": {
      color: "#5677fc"
    }
  },
  focused: {},
  outlinedInput: {
    "&$focused $notchedOutline": {
      border: "2px solid #5677fc"
    }
  },
  notchedOutline: {}
});

export default withStyles(styles)(Login);
