import { connect } from "react-redux";
import { LocalDb, AccountAPI } from "../../api";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";

const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: props => {
      AccountAPI.logout((response, error) => {
        console.log("Response message", response);
        if (response) {
          AccountAPI.logout((response, error) => {
            console.log("Response message", response);
            if (response) {
              LocalDb.removeSession();
              props.history.replace("/login");
              console.log("Session Removed");
            }
          });
        }
      });
    }
  };
};
export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
