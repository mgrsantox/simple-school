import {
  LOGIN_REQUEST_MADE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../constants/Type";

export const loginRequestMade = bool => {
  return {
    type: LOGIN_REQUEST_MADE,
    bool
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
