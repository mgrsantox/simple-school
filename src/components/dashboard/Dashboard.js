import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
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
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6} className={classes.userInfo}>
              <p>User Info</p>
            </Grid>
            <Grid item xs={6} className={classes.date}>
              <p>{this.state.date}</p>
            </Grid>
            <Grid item xs={12}>
              <Link className={classes.link} to="/lunch">
                <Button
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    background: "#2848ff",
                    textDecoration: "none"
                  }}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Lunch
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <p>
                Last CheckIn <br />
                Extra text goes here
              </p>
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{
                  color: "white",
                  background: "#ffbd03",
                  fontWeight: "bold",
                  fontSize: "16px"
                }}
                variant="contained"
                className={classes.button}
              >
                Clock Out
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Link className={classes.link} to="/login">
                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    background: "#ffbd03",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}
                  className={classes.button}
                >
                  Lock
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Button
                disabled
                variant="contained"
                style={{
                  color: "white",
                  background: "#ffbd03",
                  fontWeight: "bold",
                  fontSize: "16px"
                }}
                className={classes.button}
              >
                Cancel
              </Button>
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
    height: "60px"
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
  }
});

export default withStyles(styles)(Dashboard);
