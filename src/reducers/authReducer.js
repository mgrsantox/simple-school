import {
  LOGIN_REQUEST_MADE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../constants/Type";
import { LocalDb } from "../api";

const session = LocalDb.getSessions();
const user = session ? session.employeeLoginResponse.employee : null;
const token = session ? session.employeeLoginResponse.token : null;
const initialState = user
  ? { loggedIn: true, user, token, localError: "", loading: false }
  : { loggedIn: false, user, token, localError: "", loading: false };


  const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_MADE:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.userData.employeeLoginResponse.employee,
        token: action.userData.employeeLoginResponse.token,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        localError: action.error,
        loading: false
      };
    default:
      return state;
  }
};
export default auth;
