import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export class DefaultScreen extends Component {
  constructor() {
    super();

    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      date: date
    };
  }

  logouthandle = e => {
    this.props.logout(this.props);
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6} className={classes.userInfo}>
              <p style={{ color: "red" }}>Error</p>
            </Grid>
            <Grid item xs={6} className={classes.date}>
              <p>{this.state.date}</p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.title}>404</p> <br />
              <span>Page you are looking for is not Found</span>
            </Grid>
            <Grid item xs={6}>
              <Link className={classes.link} to="/login">
                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    background: "#42a5f5",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}
                  onClick={this.logouthandle}
                  className={classes.button}
                >
                  Lock
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link className={classes.link} to="/">
                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    background: "#42a5f5",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}
                  className={classes.button}
                >
                  HomePage
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Card>
    );
  }
}

const styles = theme => ({
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

  title: {
    fontSize: 60,
    margin: 0
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
    height: "60px"
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
  }
});

export default withStyles(styles)(DefaultScreen);
