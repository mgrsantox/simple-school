import LunchScreen from "../../screens/dashboard/LunchScreen";
import { connect } from "react-redux";
import { LocalDb, AccountAPI, LunchCountAPI } from "../../api";
import {
  lunchCountUpdateSuccess,
  lunchCountUpdateFailure
} from "../../actions/lunchCountAction";
const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: props => {
      AccountAPI.logout((response, error) => {
        // console.log("Response message", response);
        if (response) {
          LocalDb.removeSession();
          props.history.replace("/login");
          console.log("Session Removed");
        } else {
          console.log("Error", error);
        }
      });
    },
    updateLunchCount: (groupId, EmployeeId, count, props) => {
      LunchCountAPI.lunchCountPatch(
        groupId,
        EmployeeId,
        count,
        (response, error) => {
          if (response) {
            dispatch(lunchCountUpdateSuccess(response));
            console.log("Update Lunch Response", response);
            props.history.replace("/");
          } else {
            dispatch(lunchCountUpdateFailure(error.msg));
            // console.log("Update lunch error", error.msg);
          }
        }
      );
    }
  };
};
export const LunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LunchScreen);
