import {
  GROUP_REQUEST,
  GROUP_REQUEST_SUCCESS,
  GROUP_REQUEST_FAILURE
} from "../constants/Type";

export const groupRequest = bool => {
  return {
    type: GROUP_REQUEST,
    bool
  };
};

export const groupFetchSucess = groupInfo => {
  return {
    type: GROUP_REQUEST_SUCCESS,
    groupInfo
  };
};

export const groupFetchFailure = error=>{
  return {
    type: GROUP_REQUEST_FAILURE,
    error
  }
}
//fetch sucess ra fetch filure ko add garne yeaha
