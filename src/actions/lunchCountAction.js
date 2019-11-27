import {
  LUNCH_COUNT_REQUEST,
  LUNCH_COUNT_UPDATE_SUCCESS,
  LUNCH_COUNT_UPDATE_FAILURE,
} from "../constants/Type";

export const lunchCountRequest = lunchdata => {
  return {
    type: LUNCH_COUNT_REQUEST,
    lunchdata
  };
};



export const lunchCountUpdateSuccess = lunchCount => {
  return {
    type: LUNCH_COUNT_UPDATE_SUCCESS,
    lunchCount
  };
};

export const lunchCountUpdateFailure = error => {
  return {
    type: LUNCH_COUNT_UPDATE_FAILURE,
    error
  };
};
