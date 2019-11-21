import LunchScreen from "../../screens/dashboard/LunchScreen";
import { connect } from "react-redux";
import { LocalDb, AccountAPI } from "../../api";
// import { GroupAPI } from "../../api";

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
          AccountAPI.logout((response, error) => {
            // console.log("Response message", response);
            if (response) {
              LocalDb.removeSession();
              props.history.replace("/login");
              console.log("Session Removed");
            }
          });
        }
      });
    }
    // group: (employeeId, props) => {
    //   GroupAPI.groupFetch(employeeId, (response, error) => {
    //     console.log("Group Response message", response);
    //     if (response) {
    //       GroupAPI.groupFetch(employeeId, (response, error) => {
    //         console.log("Data fetched");
    //       });
    //     }
    //   });
    // }
  };
};
export const LunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LunchScreen);
