import { connect } from "react-redux";
import LoginScreen from "../../screens/auth/LoginScreen";
import { LocalDb, AccountAPI } from "../../api";
import {
  loginRequestMade,
  loginSuccess,
  loginFailure
} from "../../actions/authAction";
// import Helpers from "../helper/Helper"; only for validation

const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (userName, password, props) => {
      /* if (Helpers.checkValidityEmailPhone(userName)) {
        if (Helpers.checkValidityPassword(password)) { */
      dispatch(loginRequestMade(true));

      AccountAPI.onLogin(userName, password, (response, error) => {
        if (response) {
          LocalDb.setSession(response, err => {
            if (err === false) {
              console.log("Response from Login", response)
              AccountAPI.resetToken();
              dispatch(loginSuccess(response));
              props.history.replace("/");
            } else {
              // console.log("setting session error");
              dispatch(loginFailure(error));
            }
          });
        } else {
          dispatch(loginFailure(error.msg));
          console.log("Error", error.msg);
        }
      });
      /*    } else {
          dispatch(loginFailure("Invalid password format."));
        }
      } else {
        dispatch(loginFailure("Invalid email address format."));
      } */
    }
  };
};
export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
