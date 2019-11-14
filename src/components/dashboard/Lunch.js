import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

export class Lunch extends Component {
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
              <p>Lunch</p>
            </Grid>
            <Grid item xs={6} className={classes.date}>
              <p>{this.state.date}</p>
            </Grid>
            <Grid item xs={12}>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  required
                  id="outlined-basic"
                  className={classes.textField}
                  label="Enter Count"
                  margin="normal"
                  variant="outlined"
                />
                <Checkbox
                  //   onChange={handleChange("checkedB")}
                  value="checkedB"
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
                <span>Count as Sub</span>
                <Button
                  style={{
                    marginTop: "20px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    background: "#2848ff",
                    textDecoration: "none"
                  }}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Submit Count
                </Button>
              </form>
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
              <Link className={classes.link} to="/">
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
                  Cancel
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
    height: "60px"
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1
  }
});

export default withStyles(styles)(Lunch);
