import { connect } from "react-redux";
import { LocalDb, AccountAPI } from "../../api";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
import { GroupAPI } from "../../api";
import {
  groupFetchSucess,
  groupFetchFailure
} from "../../actions/dashboardAction";

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
            // console.log("Response message", response);
            if (response) {
              LocalDb.removeSession();
              props.history.replace("/login");
              // console.log("Session Removed");
            }
          });
        }
      });
    },
    group: (employeeId, props) => {
      GroupAPI.groupFetch(employeeId, (response, error) => {
        if (response) {
          dispatch(groupFetchSucess(response));
          // console.log(response);
        } else {
          dispatch(groupFetchFailure(error));
          console.log(error);
        }
      });
    }
  };
};
export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
