import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LocalDB from "../../api/LocalStorage";

export class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    const today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    const employeeInfo = LocalDB.getSessions().employeeLoginResponse.employee;

    this.state = {
      date: date,
      employee: employeeInfo
    };
  }

  componentDidMount() {
    this.props.group(this.state.employee.employeeId, this.props);
  }
  // this.props.group(this.props.state.auth.user.employeeId, this.props);

  logouthandle = e => {
    this.props.logout(this.props);
  };

  render() {
    const { classes } = this.props;
    console.log("State", this.props);

    return (
      <Card className={classes.card}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6} className={classes.userInfo}>
              <p>
                {this.state.employee.firstName +
                  " " +
                  this.state.employee.lastName}
              </p>
            </Grid>
            <Grid item xs={6} className={classes.date}>
              <p>{this.state.date}</p>
            </Grid>
            <Grid item xs={12}>
              {this.props.state.dashboard.group.length > 0 &&
                this.props.state.dashboard.group.map((item, key) => {
                  return (
                    <Link
                      className={classes.link}
                      key={key}
                      to={`/lunch/${item.groupId}`}
                    >
                      <Button
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          background: "#42a5f5",
                          textDecoration: "none"
                        }}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  );
                })}
            </Grid>

            <Grid item xs={12} style={{ textAlign: "center" }}>
              <p>
                Last CheckIn <br />
                Extra text goes here
              </p>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                style={{
                  color: "#42a5f5",
                  // background: "#ffbd03",
                  fontWeight: "bold",
                  fontSize: "16px"
                }}
                className={classes.button}
              >
                Clock Out
              </Button>
            </Grid>
            <Grid item xs={12}>
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
  }
});

export default withStyles(styles)(DashboardScreen);
