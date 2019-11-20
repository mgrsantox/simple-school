import {
  LOGIN_REQUEST_MADE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../constants/Type";

export const loginRequestMade = (bool, x) => {
  return {
    type: LOGIN_REQUEST_MADE,
    bool,
    x
  };
};
export const loginSuccess = userData => {
  return {
    type: LOGIN_SUCCESS,
    userData
  };
};
export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};
